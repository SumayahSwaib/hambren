<?php
if (isset($_POST['pay']))
    pay();

if (isset($_GET['callback']))
    callback();
function pay(){

    $body['ref'] = md5(time());
    $body['amount'] = (int)$_POST['amount']; //Amount to be deposited
    $body['phone_number'] = trim($_POST['phone']); //Phone number to be deducted from
    $body['user'] = $_POST['user']; //The user making the payment
    if (empty(trim($_POST['phone'])))
        $body->message = "Phone number is empty";
    else {
        $response = _silicon_send_mm_load((object)$body);
        // print_r($response);
        var_dump($response);
    }
    // $redirect_url = "https://dailyearners.online";
    // $call_back_url = "";
    // $currency = "UGX";
}

function _silicon_send_mm_load($request_body)
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
    return _send_silicon_curl_load($data);
}

function _send_silicon_curl_load($data)
{
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://silicon-pay.com/process_payments?callback',
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
    $tx_ref = $json_request->txRef; //Transaction referrence sent along with the request
    $network_ref = $json_request->nework_ref ?? null;
    $amount = $json_request->amount;
    /*
    Save this information
    */

}