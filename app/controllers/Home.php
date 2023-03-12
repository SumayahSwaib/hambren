<?php

class Home extends Controller
{
    function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws SmartyException
     */
    function index()
    {
        $this->smarty->display("home.tpl");
    }

    /**
     * @throws SmartyException
     */
    function forgot_password() {
        $this->smarty->display("forgot-password.tpl");
    }

    function about_us() {

    }

    function contact_us() {

    }

    function privacy_policy() {

    }

    function order_tracking() {

    }

    function payment_methods() {

    }

    function return_policy() {

    }

    function refund_policy() {

    }

    function shipping_policy() {

    }

    function terms_of_service() {

    }
}