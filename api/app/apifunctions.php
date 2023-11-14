<?php

@include_once('Database.php');

$cmd = '';

// POST SIMULATIE
// if($_SERVER['REQUEST_METHOD'] == 'POST') {
//    // We simuleren hier het afhandelen van een POST-request
//    header('Content-Type: application/json');
//    header('HTTP/1.1 200 Ok');
//    echo json_encode($_POST);
//    die();
// }

function getAllTodos()
{
   $sql = "SELECT * FROM `todos`";
   Database::query($sql);
   $rows = Database::getAll();

   header('Content-Type: application/json');
   echo json_encode($rows);
}

function createTodos()
{
   $data = $_POST["data"];

   $sql = "INSERT INTO `todos` (`user_id`, `task`) VALUES ('1', '$data')";
   Database::query($sql);
}