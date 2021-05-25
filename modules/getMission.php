<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $start = $reciveData['count'] * 7;
    $sql = "select * from mission limit $start, 7";
    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>