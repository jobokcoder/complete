<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $id = $reciveData['id'];
    $type = $reciveData['type'];

    if($type == 0){
        $sql = "select * from mission where ms_writer = '$id'";
    }else if($type == 1){
        $sql = "select mission.*, confirm.* from mission join confirm on mission.ms_id = confirm.ms_id where ms_writer = '$id' and c_status = 0";
    }else if($type == 2){
        $sql = "select mission.*, confirm.* from mission join confirm on mission.ms_id = confirm.ms_id where ms_writer = '$id' and c_status = 1";
    }

    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>