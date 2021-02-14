<?php

namespace Controllers;

class Home{
	
	public function index(){
		require_once "./Views/src/header.html";
		require_once "./Views/home/index.html";
		require_once "./Views/src/footer.html";
	}
}
