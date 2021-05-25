<?php
    include('./modules.php');

    $id = $_SESSION['m_id'];
    $sql = "select * from member where m_id = '$id'";
    $arr = getData($sql);

    $result['id'] = $arr[0]['m_id'];
    $result['nick'] = $arr[0]['m_nick'];
    $result['email'] = $arr[0]['m_email'];
    $result['m_add1'] = $arr[0]['m_add1'];
    $result['m_add2'] = $arr[0]['m_add2'];

    print_r(json_encode($result));
?>