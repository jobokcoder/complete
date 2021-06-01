<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 0;
    $ms_id = $reciveData['id'];
    $m_id = $_SESSION['m_id'];

    $sql = "select * from agent where ms_id = '$ms_id' and m_id = '$m_id'";
    $result = getData($sql);
    $count = count($result);
    if($count > 0){
        $json['status'] = 1;
    }

    print_r(json_encode($json));
?>