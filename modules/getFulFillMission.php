<?php
    include('./modules.php');

    $empty = [];
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $m_id = $_SESSION['m_id'];
    $type = $reciveData['type'];

    if($type == 0){
        $sql = "select agent.*, mission.*, confirm.* from agent left join mission on agent.ms_id = mission.ms_id join confirm on mission.ms_id = confirm.ms_id where agent.m_id = '$m_id' and c_status = 0";
    }else if($type == 1){
        $sql = "select mission.*, confirm.* from mission join confirm on mission.ms_id = confirm.ms_id where m_id = '$m_id' and c_status = '1'";
    }
    
    $result = getData($sql);
    if(count($result) > 0){
        print_r(json_encode($result));
    }else{
        print_r(json_encode($empty));
    }

?>