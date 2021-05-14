<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $obj = [];
    $ms_id = $reciveData['id'];
    $sql = "update mission set ms_lookup = ms_lookup + 1 where ms_id = '$ms_id' ";
    $result = setData($sql);
    
    if($result){
        $obj['status'] = 200;
    }else{
        $obj['status'] = 404;
    }

    print_r(json_encode($obj));
?>