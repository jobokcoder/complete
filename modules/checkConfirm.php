<?php
    include('./modules.php');
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $m_id = $_SESSION['m_id'];
    $ms_id = $reciveData['ms_id'];

    $sql = "select * from confirm where m_id = '$m_id' and ms_id = '$ms_id'";
    $result = getData($sql);

    print_r(json_encode($result));
?>