<?php
@include_once('Database.php');

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
   
   $sql = "SELECT * FROM `users` WHERE `username` = '$username'";

   Database::query($sql);
   $rows = Database::getAll();

   // als user niet bestaat maak user aan
   if (count($rows) == 0) {
      $sql = "INSERT INTO `users` (`username`) VALUES ('$username')";
      Database::query($sql);
   } else {
      $sql = "SELECT todos.id, todos.task, todos.startdate, todos.enddate, todos.done, todos.user_id,  users.username
      FROM todos
      INNER JOIN users
      ON todos.user_id=users.id
      WHERE users.username = '$username'";

      Database::query($sql);
      $rows = Database::getAll();

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

function todoDone()
{
   $id = $_GET['id'];
   $sql = "SELECT * FROM `todos` WHERE `id` = '$id'";

   Database::query($sql);
   $rows = Database::getAll();

   if ($rows[0]['done'] == 1) {
      $enddate = null;
      $sql = "UPDATE `todos` SET `done` = '0', `enddate` = '$enddate' WHERE `todos`.`id` = $id";
      Database::query($sql);
   } else {
      $enddate = date("Y-m-d");
      $sql = "UPDATE `todos` SET `done` = '1', `enddate` = '$enddate' WHERE `todos`.`id` = $id";
      Database::query($sql);
   }
}

function todoDelete()
{
   $id = $_GET['id'];
   $sql = "DELETE FROM `todos` WHERE `todos`.`id` = $id";
   Database::query($sql);
}