<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $type = $reciveData['type'];

    if($type === 1){
        $sql = "select * from mission order by ms_lookup desc limit 0, 8";
    }else if($type === 2){
        $sql = "select * from mission order by ms_date_end asc limit 0, 8";
    }else if($type === 3){
        $sql = "select * from mission order by ms_lookup desc limit 0, 8";
    }

    $result = getData($sql);
    print_r(json_encode($result));
?>