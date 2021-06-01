<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 100;
    $json['data'] = [];
    $type = $reciveData['type'];
    $m_id = $_SESSION['m_id'];

    if($type === 0){
        $sql = "select request.*, mission.* from request join mission on request.ms_id = mission.ms_id where mission.ms_writer = '$m_id'";
        $json['data'] = getData($sql);
    }else if($type === 1){
        $sql = "select request.*, mission.* from request join mission on request.ms_id = mission.ms_id where request.m_id = '$m_id'";
        $json['data'] = getData($sql);
    }

    print_r(json_encode($json));
?>