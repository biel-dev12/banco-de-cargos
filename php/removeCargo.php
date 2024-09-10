<?php
include_once("./config.php");

$delCargo = $_GET["cargo"];

// Verificar se o cargo já existe
$stmt = $conn->prepare("SELECT nm_cargo FROM tb_cargo WHERE nm_cargo = ?");
$stmt->bind_param("s", $delCargo);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['count'] > 0) {
    echo json_encode([
        "success" => false,
        "message" => "Cargo " . $row['nm_cargo'] . "encontrado, deseja apagar do banco de cargos?"
    ], JSON_UNESCAPED_UNICODE);
    $conn->close();
    exit;
}

$conn->close();
