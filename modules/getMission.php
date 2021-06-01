<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $start = $reciveData['count'] * 7;
    $area = $reciveData['area'];

    if($area === 'none'){
        $sql = "select * from mission limit $start, 7";
    }else{
        $sql = "select mission.*, member.m_id from mission join member on mission.ms_writer = member.m_id where member.m_add1 = '$area' limit $start, 7";
    }

    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>