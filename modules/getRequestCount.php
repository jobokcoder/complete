<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $ms_id = $reciveData['ms_id'];

    $sql = "select * from agent where ms_id = '$ms_id'";

    $data = getData($sql);
    $count = count($data);
    $result['count'] = $count;

    print_r(json_encode($result));
?>