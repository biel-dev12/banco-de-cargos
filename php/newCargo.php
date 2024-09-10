<?php
include_once("./config.php");

$newCargo = $_GET["cargo"];
$newDesc = $_GET["desc"];

// Verificar se o cargo já existe
$stmt = $conn->prepare("SELECT COUNT(*) AS count FROM tb_cargo WHERE nm_cargo = ?");
$stmt->bind_param("s", $newCargo);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['count'] > 0) {
    echo json_encode([
        "success" => false,
        "message" => "O cargo já existe no banco de dados."
    ], JSON_UNESCAPED_UNICODE);
    $conn->close();
    exit;
}

$stmt = $conn->prepare("INSERT INTO tb_cargo (nm_cargo, ds_desc) VALUES (?, ?)");
$stmt->bind_param("ss", $newCargo, $newDesc);
$stmt->execute();

$stmt2 = $conn->prepare("SELECT nm_cargo, ds_desc FROM tb_cargo WHERE nm_cargo = ?");
$stmt2->bind_param("s", $newCargo);
$stmt2->execute();
$result = $stmt2->get_result();

$response = [];
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $response = [
        "cargo" => $row["nm_cargo"],
        "desc" => $row["ds_desc"],
    ];
}

echo json_encode($response, JSON_UNESCAPED_UNICODE);

$conn->close();
?>