<?php
@include_once('Database.php');

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

function getTodos()
{
   global $username;
   
   $sql = "SELECT todos.*
   FROM todos
   INNER JOIN users
   WHERE users.username = '$username'";

   Database::query($sql);
   $rows = Database::getAll();

   // als user niet bestaat maak user aan
   if (count($rows) == 0) {
      $sql = "INSERT INTO `users` (`username`) VALUES ('$username')";
      Database::query($sql);
   }

   header('Content-Type: application/json');
   echo json_encode($rows);
}

function createTodos()
{
   // task data ophalen
   $data = file_get_contents('php://input');
   preg_match('/name="task"\r\n\r\n(.*?)\r\n/', $data, $matches);
   $taskValue = $matches[1];

   $sql = "INSERT INTO `todos` (`user_id`, `task`) VALUES ('1', '$taskValue')";
   Database::query($sql);
}