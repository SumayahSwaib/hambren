<?php
if ( !defined('APPLICATION_LOADED') || !APPLICATION_LOADED ) {
    echo json_encode(array("status" => "fail", "code" => "503", "message" => "Invalid request"));
}
//Less define our simple routes in this file to help us map to the exact methods in our project

$routes['']                                  =               "Home/index";
$routes['dashboard']                         =               "Dashboard/index";
$routes['forgot-password']                   =               "Home/forgot_password";
$routes['login']                             =               "Auth/login";
$routes['logout']                            =               "Auth/logout";
$routes['students']                          =               "Students/index";
$routes['students/add-student']              =               "Students/add_student";
$routes['students/save-student']             =               "Students/save_student";
//$routes['f']                               =               "Home/f";

/*
 * Website
 */