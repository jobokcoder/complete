<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $keyword = $reciveData['keyword'];
    $area = $reciveData['area'];
    $start = $reciveData['count'] * 6;
    $sql = "";
    
    if($area === 'none'){
        $sql = "select mission.*, member.* from mission join member on mission.ms_writer = member.m_id where mission.ms_title like '%$keyword%' or mission.ms_tag like '%$keyword%' or mission.ms_contents like '%$keyword%' limit $start, 7";
    }else{
        $sql = "select mission.*, member.* from mission join member on mission.ms_writer = member.m_id where member.m_add1 = '$area' and mission.ms_title like '%$keyword%' or member.m_add1 = '$area' and mission.ms_tag like '%$keyword%' or member.m_add1 = '$area' and mission.ms_contents like '%$keyword%' limit $start, 7";
    }
    $result = getData($sql);
    $count = count($result);
    
    print_r(json_encode($result));
?>