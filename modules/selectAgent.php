<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 100;
    $json['data'] = [];
    $ms_id = $reciveData['id'];
    $m_id = $_SESSION['m_id'];

    $sql = "select request.*, member.* from request join member on request.m_id = member.m_id where request.ms_id = '$ms_id'";
    $json['data'] = getData($sql);

    print_r(json_encode($json));
?>