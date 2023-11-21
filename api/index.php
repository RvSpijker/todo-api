<?php
@include_once('app/HttpStatus.php');
@include_once('app/apifunctions.php');

$cmd = '';
$username = '';

if(isset($_GET['cmd']) ) {
    $cmd = strtolower($_GET['cmd']);
}

if(isset($_GET['name']) ) {
    $username = $_GET['name'];
    getTodos();
    die();
}

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    createTodos();
    die();
}

if($_SERVER['REQUEST_METHOD'] == 'PUT') {
    todoDone();
    die();
}

if($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    todoDelete();
    die();
}

switch($cmd) {
    case 'all':                  
        getAllTodos();   // Geef alle todos terug
        break;
}

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