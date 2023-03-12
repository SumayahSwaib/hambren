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





}