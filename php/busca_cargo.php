<?php
    include_once("./config.php");

    $cargo = $_GET['cargo'];

    $stmt = $conn->prepare("SELECT * FROM tb_cargo WHERE nm_cargo = ?");
    $stmt->bind_param("s", $cargo);
    $stmt->execute();
    $result = $stmt->get_result();

    $response = [];
    if($result->num_rows > 0){
        $row = $result->fetch_assoc();
        $response = [
            'cargo' => $row['nm_cargo'],
            'desc' => $row['ds_desc'],
            'riscos' => $row['ds_riscos'],
            'exames' => $row['ds_exames'],
        ];
    }

    echo json_encode($response, JSON_UNESCAPED_UNICODE);

    $conn->close();
?>