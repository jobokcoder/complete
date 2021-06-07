<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $ms_id = $reciveData['ms_id'];
    $sql = "select * from mission where ms_id = '$ms_id'";

    $result = getData($sql);
    $count = count($result);

    print_r(json_encode($result));
?>