<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $email = $reciveData['email'];
    $sql = "select * from member where m_email = '$email'";
    $result = getData($sql);

    echo $result[0]['m_id'];
?>