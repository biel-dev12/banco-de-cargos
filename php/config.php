<?php

$user = "root";
$passw = "";
$db = "db_cargos";
$hostname = "localhost"; 

$conn = new mysqli($hostname, $user, $passw, $db);

if($conn->connect_error){
    die("Conexão com o banco de dados falhou!" . $conn->connect_error);
}
?>
