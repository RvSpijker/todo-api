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
   
   $sql = "SELECT *
FROM todos
INNER JOIN users
ON todos.user_id=users.id
WHERE users.username = '$username'";

   Database::query($sql);
   $rows = Database::getAll();

   // als user niet bestaat maak user aan
   if (count($rows) == 0) {
      $sql = "INSERT INTO `users` (`username`) VALUES ('$username')";
      Database::query($sql);
   } else {
      header('Content-Type: application/json');
      echo json_encode($rows);
   }

}

function createTodos()
{
   // task data ophalen
   $name = $_POST['name'];
   $task = $_POST['task'];

   $sql = "SELECT id FROM users WHERE username = '$name'";
   Database::query($sql);
   $rows = Database::getAll();
   $user_id = $rows[0]['id'];

   $sql = "INSERT INTO `todos` (`user_id`, `task`) VALUES ('$user_id', '$task')";
   Database::query($sql);
}