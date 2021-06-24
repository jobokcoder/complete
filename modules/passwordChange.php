<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 100;
    $now_pass = $reciveData['now_pass'];
    $change_pass = $reciveData['change_pass'];
    $m_id = $_SESSION['m_id'];

    $sql = "select * from member where m_id = '$m_id' and m_pw = '$now_pass'";
    $result = getData($sql);
    $count = count($result);
    if($count > 0){
        $json['status'] = 200;
        $sql = "update member set m_pw = '$change_pass' where m_id = '$m_id'";
        $result = setData($sql);
        print_r(json_encode($json));
    }else{
        $json['status'] = 404;
        print_r(json_encode($json));
    }
?>