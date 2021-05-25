<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $type = $reciveData['type'];
    $area = $reciveData['area'];

    if($area === 'none'){
        if($type === 1){
            $sql = "select * from mission order by ms_lookup desc limit 0, 8";
        }else if($type === 2){
            $sql = "select * from mission order by ms_date_end asc limit 0, 8";
        }
    }else{
        if($type === 1){
            $sql = "select mission.*, member.* from mission join member on mission.ms_writer = member.m_id where member.m_add1 = '$area' order by mission.ms_lookup desc limit 0, 8";
        }else if($type === 2){
            $sql = "select mission.*, member.* from mission join member on mission.ms_writer = member.m_id where member.m_add1 = '$area' order by mission.ms_date_end desc limit 0, 8";
        }
    }

    $result = getData($sql);
    print_r(json_encode($result));
?>