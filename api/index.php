<?php
@include_once('app/HttpStatus.php');
@include_once('app/apifunctions.php');

$cmd = '';

// POST SIMULATIE
// if($_SERVER['REQUEST_METHOD'] == 'POST') {
//     // We simuleren hier het afhandelen van een POST-request
//     header('Content-Type: application/json');
//     header('HTTP/1.1 200 Ok');
//     echo json_encode($_POST);
//     createTodos();

//     die();
// }

if(isset($_GET['cmd']) ) {
    $cmd = strtolower($_GET['cmd']);
}

switch($cmd) {
    case 'all':                   // Geef alle todos terug
        getAllTodos();
        break;
        
    default:                 // Maak een nieuwe todos aan
        createTodos();
    }