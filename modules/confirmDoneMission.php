<?php
    include('./modules.php');
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $ms_id = $reciveData['ms_id'];
    $stamp = $reciveData['stamp'];

    $sql = "update confirm set c_status = '1', c_stamp = '$stamp' where ms_id = '$ms_id'";
    $result = setData($sql);
    $json = [];
    if($result){
        $json['status'] = 200;
        print_r(json_encode($json));
    }
?>