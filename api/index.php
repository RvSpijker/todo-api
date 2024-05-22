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