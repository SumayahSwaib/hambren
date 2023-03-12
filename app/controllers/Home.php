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




    function about_us() {
        $this->smarty->display("home/about_us.tpl");
    }

    function contact_us() {
        $this->smarty->display("home/contact_us.tpl");
    }

    function privacy_policy() {
        $this->smarty->display("home/privacy_policy.tpl");
    }

    function order_tracking() {
        $this->smarty->display("home/order_tracking.tpl");
    }

    function payment_methods() {
        $this->smarty->display("home/payment_methods.tpl");
    }

    function return_policy() {
        $this->smarty->display("home/return_policy.tpl");
    }

    function refund_policy() {
        $this->smarty->display("home/refund_policy.tpl");
    }

    function shipping_policy() {
        $this->smarty->display("home/shipping_policy.tpl");
    }

    function terms_of_service() {
        $this->smarty->display("home/terms_of_service.tpl");
    }

    function search() {
        $this->smarty->display("home/search.tpl");
    }
}