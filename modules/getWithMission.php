<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $id = $reciveData['id'];
    $sql = "select * from mission where ms_writer = '$id'";
    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>