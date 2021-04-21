<?php
    include('./modules.php');

    $arr['code'] = $_SESSION['email'];
    print_r(json_encode($arr));

?>