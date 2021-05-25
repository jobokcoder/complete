<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $keyword = $reciveData['keyword'];
    $sql = "select * from mission where ms_title like '%$keyword%' or ms_tag like '%$keyword%' or ms_contents like '%$keyword%'";
    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>