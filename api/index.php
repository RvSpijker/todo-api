<?php
@include_once('app/HttpStatus.php');
@include_once('app/apifunctions.php');

$cmd = '';

if(isset($_GET['cmd']) ) {
    $cmd = strtolower($_GET['cmd']);
}

switch($cmd) {
    case 'all':                   // Geef alle valuta terug
        getAllTodos();
        break;
    }