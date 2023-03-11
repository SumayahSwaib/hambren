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
        if (! $this->session->data('user'))
            $this->smarty->display("login.tpl");
        else
            $this->redirect("/dashboard");
    }

    /**
     * @throws SmartyException
     */
    function forgot_password() {
        $this->smarty->display("forgot-password.tpl");
    }





}