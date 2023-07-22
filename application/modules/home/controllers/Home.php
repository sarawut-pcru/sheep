<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CRUD_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->config('preallocate');
      
    }

    public function index()
    {
        $this->setJs('/assets/js_modules/login.js?ft=' . time());
        $this->render_main('home/login');
    }
    public function register()
    {
        $this->data['title']   =  $this->config->item('title_option_th');
        $this->setJs('/assets/js_modules/register.js?ft=' . time());
        $this->render_main('home/register');
    }
    public function forgetpassword()
    {
        $this->setJs('/assets/js_modules/forgetpassword.js?ft=' . time());
        $this->render_main('home/forget_password');
    }
    
    public function session()
    {
        echo '<pre>';
        print_r($this->session->userdata());
        die;
    }
}