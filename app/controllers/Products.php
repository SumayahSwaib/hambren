<?php

class Products extends Controller
{
    function __construct()
    {
        parent::__construct();
    }

    function index() {

    }

    function item() {
        $this->smarty->display("products/item.tpl");
    }

}