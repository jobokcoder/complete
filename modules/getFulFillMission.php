<?php
    include('./modules.php');

    $json = [];
    $m_id = $_SESSION['m_id'];

    $sql = "select agent.*, mission.* from agent join mission on agent.ms_id = mission.ms_id where m_id = '$m_id'";
    $result = getData($sql);

    print_r(json_encode($result));
?>