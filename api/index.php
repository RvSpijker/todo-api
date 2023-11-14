<?php
@include_once('app/HttpStatus.php');
@include_once('app/apifunctions.php');

$cmd = '';

// POST SIMULATIE
// if($_SERVER['REQUEST_METHOD'] == 'POST') {
//     // We simuleren hier het afhandelen van een POST-request
//     header('Content-Type: application/json');
//     header('HTTP/1.1 200 Ok');
//     $data = file_get_contents('php://input');

//     // Use a regular expression to extract the value of "task"
//     preg_match('/name="task"\r\n\r\n(.*?)\r\n/', $data, $matches);
//     $taskValue = $matches[1];

//     echo $taskValue;
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