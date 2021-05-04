<?php
    include('./modules.php');

    $sql = 'select * from mission';
    $result = getData($sql);

    print_r(json_encode($result));
?>