<?php

@include_once('Database.php');

/**
 * getAllCurrencies
 * ----------------
 * Wordt aangeroepen op basis van de API call met querystring cmd=all
 * Geeft de gegevens van alle valuta terug aan de client
 *
 * @return void
 */
function getAllTodos()
{
   $sql = "SELECT * FROM `todos`";
   Database::query($sql);
   $rows = Database::getAll();

   header('Content-Type: application/json');
   echo json_encode($rows);
}