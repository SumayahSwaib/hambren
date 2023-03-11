<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Deposit;
use App\Models\Gateway;
use App\Models\GeneralSetting;
use App\Models\Payment;
use App\Models\Plan;
use App\Models\Transaction;
use App\Notifications\DepositNotification;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\BPalGateway\BPalGateway;

class PaymentController extends Controller
{
    public function __construct()
    {
        $this->template = GeneralSetting::first()->theme == 1 ? 'frontend.' : 'theme2.';
    }

    public function gateways(Request $request, $id)
    {

        $plan = Plan::findOrFail($id);

        $plan_exist = Payment::where('plan_id', $id)->where('user_id', Auth::id())->where('next_payment_date', '!=', null)->where('payment_status', 1)->first();

        if (!$plan_exist) {

            $gateways = Gateway::where('status', 1)->latest()->get();

            $pageTitle = "Payment Methods";

            return view($this->template . "user.gateway.gateways", compact('gateways', 'pageTitle', 'plan'));
        }

        return redirect()->back()->with('error', 'Already invest to this plan');
    }

    public function paynow(Request $request)
    {
        $request->validate([
            'amount' => 'required|gte:0',
        ]);

        $gateway = Gateway::where('status', 1)->findOrFail($request->id);
        $trx = strtoupper(Str::random());
        $final_amount = ($request->amount * $gateway->rate) + $gateway->charge;

        if (isset($request->type) && $request->type == 'deposit') {

            $deposit = Deposit::create([
                'gateway_id' => $gateway->id,
                'user_id' => auth()->id(),
                'transaction_id' => $trx,
                'amount' => $request->amount,
                'rate' => $gateway->rate,
                'charge' => $gateway->charge,
                'final_amount' => $final_amount,
                'payment_status' => 0,
                'payment_type' => 1,
            ]);

            session()->put('trx', $trx);
            session()->put('type', 'deposit');


            return redirect()->route('user.gateway.details', $gateway->id);
        }



        $plan_id = Plan::with('time')->findOrFail($request->plan_id);

        if ($plan_id->amount_type == 0) {
            if ($plan_id->maximum_amount) {
                if ($request->amount > $plan_id->maximum_amount) {
                    return redirect()->back()->with('error', 'Maximum Invest Limit ' . number_format($plan_id->maximum_amount, 2));
                }
            }

            if ($plan_id->minimum_amount) {
                if ($request->amount < $plan_id->minimum_amount) {
                    return redirect()->back()->with('error', 'Minimum Invest Limit ' . number_format($plan_id->minimum_amount, 2));
                }
            }
        }

        if ($plan_id->amount_type == 1) {

            if ($plan_id->amount) {
                if ($request->amount != $plan_id->amount) {
                    return redirect()->back()->with('error', 'Fixed Invest Limit ' . number_format($plan_id->amount, 2));
                }
            }
        }

        $next_payment_date = Carbon::now()->addHours($plan_id->time->time);

        $payment = Payment::create([
            'plan_id' => $plan_id->id,
            'gateway_id' => $gateway->id,
            'user_id' => auth()->id(),
            'transaction_id' => $trx,
            'amount' => $request->amount,
            'rate' => $gateway->rate,
            'charge' => $gateway->charge,
            'final_amount' => $final_amount,
            'payment_status' => 0,
            'next_payment_date' => $next_payment_date,

        ]);




        session()->put('trx', $trx);
        session()->forget('type');

        return redirect()->route('user.gateway.details', $gateway->id);
    }

    public function gatewaysDetails($id)
    {

        $gateway = Gateway::where('status', 1)->findOrFail($id);

        $general = GeneralSetting::first();

        if (session('type') == 'deposit') {
            $deposit = Deposit::where('transaction_id', session('trx'))->firstOrFail();
        } else {

            $deposit = Payment::where('transaction_id', session('trx'))->firstOrFail();
        }
        $gateway->gateway_name = "Fixing";

        $pageTitle = $gateway->gateway_name . ' Payment Details';


        if ($gateway->gateway_name == 'vouguepay') {

            $vouguePayParams["marchant_id"] = $gateway->gateway_parameters->vouguepay_merchant_id;
            $vouguePayParams["redirect_url"] = route("user.vouguepay.redirect");
            $vouguePayParams["currency"] = $gateway->gateway_parameters->gateway_currency;
            $vouguePayParams["merchant_ref"] = $deposit->transaction_id;
            $vouguePayParams["memo"] = "Payment";
            $vouguePayParams["store_id"] = $deposit->user_id;
            $vouguePayParams["loadText"] = $deposit->transaction_id;
            $vouguePayParams["amount"] = $deposit->final_amount;

            $vouguePayParams = json_decode(json_encode($vouguePayParams));

            return view($this->template . "user.gateway.{$gateway->gateway_name}", compact('gateway', 'pageTitle', 'deposit', 'vouguePayParams'));
        }

        if ($gateway->is_created) {
            return view($this->template . "user.gateway.gateway_manual", compact('gateway', 'pageTitle', 'deposit'));
        }


        if (strstr($gateway->gateway_name, 'gourl')) {
            return view($this->template . "user.gateway.gourl", compact('gateway', 'pageTitle', 'deposit'));
        }


        return view($this->template . "user.gateway.{$gateway->gateway_name}", compact('gateway', 'pageTitle', 'deposit'));
    }

    public function gatewayRedirect(Request $request, $id)
    {

        $gateway = Gateway::where('status', 1)->findOrFail($id);

        if (session('type') == 'deposit') {
            $deposit = Deposit::where('transaction_id', session('trx'))->firstOrFail();
        } else {

            $deposit = Payment::where('transaction_id', session('trx'))->firstOrFail();
        }

        if ($gateway->is_created) {

            $new = __NAMESPACE__ . '\\Gateway\\' . 'manual\ProcessController';
        } else {

            if (strstr($gateway->gateway_name, 'gourl')) {
                $new = __NAMESPACE__ . '\\Gateway\\' . 'gourl' . '\ProcessController';
            } else {
                $new = __NAMESPACE__ . '\\Gateway\\' . $gateway->gateway_name . '\ProcessController';
            }
        }


        $data = $new::process($request, $gateway, $deposit->final_amount, $deposit);

        if ($gateway->gateway_name == 'mercadopago' ) {
            return redirect()->to($data['redirect_url']);
        }

        if ($gateway->gateway_name == 'BPalgateway_ugx' ) {
            $amount = $deposit->final_amount;
            $transid = Str::lower($deposit->transaction_id);

            return redirect()->route('user.bpalpayments')->with('transid',$transid)->with('amount',$amount);

        }

        if ($gateway->gateway_name == 'Automatic Deposits(MTN and AIRTEL)_ugx' ) {
            $body['ref'] = $deposit->transaction_id;
            $body['ref'] = md5(time());
            $body['amount'] = (int)$deposit->final_amount;
            $body['phone_number'] = trim($_POST['phone']);
            $body['user'] = $id;
            if (empty(trim($_POST['phone'])))
                $body->message = "Phone number is empty";
            else
                $response = PaymentController::_silicon_send_mm_load((object)$body);
            // $redirect_url = "https://dailyearners.online";
            // $call_back_url = "";
            // $currency = "UGX";

            // $paymentModalUrl = 'https://silicon-pay.com/payModal/S637fd455cdced6.32422728';
            // $parameters = 'amount='.$amount.'& currency='.$currency.'&txRef='.$txRef.'&call_back_url='.$call_back_url.'&redirect_url='.$redirect_url;
            //$FinalLink = $paymentModalUrl."?".$parameters;
            $FinalLink = "https://{$_SERVER['SERVER_NAME']}/gateways/{$id}/details?message={$response->message}";
            return redirect($FinalLink);

        }




        if (strstr($gateway->gateway_name, 'gourl')) {
            return redirect()->to($data);
        }

        if ($gateway->gateway_name == 'nowpayments') {

            return redirect()->to($data->invoice_url);
        }

        if ($gateway->gateway_name == 'mollie') {

            return redirect()->to($data['redirect_url']);
        }

        if ($gateway->gateway_name == 'paghiper') {

            if (isset($data['status']) && $data['status'] == false) {
                return redirect()->route('user.investmentplan')->with('error', 'Something Went Wrong');
            }

            return redirect()->to($data);
        }

        if ($gateway->gateway_name == 'coinpayments') {

            if (isset($data['result']['checkout_url'])) {

                return redirect()->to($data['result']['checkout_url']);
            }
        }

        if ($gateway->gateway_name == 'paypal') {

            $data = json_decode($data);

            return redirect()->to($data->links[1]->href);
        }
        if ($gateway->gateway_name == 'paytm') {

            return view($this->template.'user.gateway.auto',compact('data'));
        }

        $notify[] = ['success', 'Your Payment is Successfully Recieved'];
        return redirect()->route('home')->withNotify($notify);
    }

    public static function _silicon_call_back() {

    }

    public static function _silicon_send_mm_load($request_body)
    {
        $data = [
            "req" => "mobile_money",
            "currency" => "UGX",
            "phone" => $request_body->phone_number,
            "encryption_key" => /*Replace this with your encryption key */ "5da9b9335d64b21b89748f06ed609712",
            "amount" => $request_body->amount,
            "emailAddress" => "payments@dailyearners.online",
            'call_back' => "https://dailyearners.online/gateways/{$request_body->user}/details/callback",
            "txRef" => $request_body->ref
        ];
        return self::_send_silicon_curl_load($data);
    }

    public static function _send_silicon_curl_load($data)
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://silicon-pay.com/process_payments',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS =>json_encode($data),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json'
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        return json_decode($response);
    }

    function call_back() {
        /*
        Handle callbacks using this link
        */
        $json_request = file_get_contents("php://input");
        $json_request = json_decode($json_request);
        //Call back ref is store in here
        $tx_ref = $response->txRef; //Transaction referrence sent along with the request
        $network_ref = $response->nework_ref ?? null;
        $amount = $response->amount;
        /*
        Save this information
        */

    }

    public static function updateUserData($deposit, $fee_amount, $transaction)
    {

        $general = GeneralSetting::first();

        $admin = Admin::first();

        $user = auth()->user();

        if (session('type') == 'deposit') {
            $user->balance = $user->balance + $deposit->amount;

            $user->save();

            $admin->notify(new DepositNotification($user, $deposit));
        }

        $deposit->payment_status = 1;

        $deposit->save();

        if (!(session('type') == 'deposit')) {

            refferMoney(auth()->id(), $deposit->user->refferedBy, 'invest', $deposit->amount);
        }

        session()->forget('type');

        Transaction::create([
            'trx' => $deposit->transaction_id,
            'gateway_id' => $deposit->gateway_id,
            'amount' => $deposit->amount,
            'currency' => @$general->site_currency,
            'details' => 'Payment Successfull',
            'charge' => $fee_amount,
            'type' => '-',
            'gateway_transaction' => $transaction,
            'user_id' => auth()->id(),
            'payment_status' => 1,
        ]);

        sendMail('PAYMENT_SUCCESSFULL', [
            'plan' => $deposit->plan->plan_name ?? 'Deposit',
            'trx' => $transaction,
            'amount' => $deposit->amount,
            'currency' => $general->site_currency,
        ], $deposit->user);
    }
}
