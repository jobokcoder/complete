<?php
    include('./modules.php');
    $m_id = $_SESSION['m_id'];

    $sql = "select m_complete, m_fail from member where m_id = '$m_id'";
    $result = getData($sql);

    print_r(json_encode($result));
?>