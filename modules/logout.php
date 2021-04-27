<?php
    include('./modules.php');
    $response = [];
    $response['status'] = 200;
    print_r(json_encode($response));
    session_destroy();
?>