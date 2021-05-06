<?php
    include('./modules.php');

    $sql = 'select * from mission';
    $result = getData($sql);
    $count = count($result);

    echo $count;
    // print_r(json_encode($result));
?>