<?php
include_once("../php/config.php");

// Obter o nome do cargo do parâmetro GET
$delCargo = $_GET["cargo"];

// Verificar se o cargo existe
$stmt = $conn->prepare("SELECT COUNT(*) AS count FROM tb_cargo WHERE nm_cargo = ?");
$stmt->bind_param("s", $delCargo);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($row['count'] > 0) {
    // Cargo existe, agora deletar
    $stmt = $conn->prepare("DELETE FROM tb_cargo WHERE nm_cargo = ?");
    $stmt->bind_param("s", $delCargo);
    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Cargo " . htmlspecialchars($delCargo, ENT_QUOTES, 'UTF-8') . " removido com sucesso."
        ], JSON_UNESCAPED_UNICODE);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Erro ao remover o cargo."
        ], JSON_UNESCAPED_UNICODE);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "Cargo não encontrado."
    ], JSON_UNESCAPED_UNICODE);
}

$conn->close();
?>
