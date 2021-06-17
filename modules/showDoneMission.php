<?php
    include('./modules.php');
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $ms_id = $reciveData['ms_id'];
    $m_id = $_SESSION['m_id'];

    $sql = "select mission.*, confirm.* from mission join confirm on mission.ms_id = confirm.ms_id where confirm.c_status = 1 and mission.ms_writer = '$m_id' and mission.ms_id = '$ms_id'";
    $result = getData($sql);
    
    print_r(json_encode($result));
?>