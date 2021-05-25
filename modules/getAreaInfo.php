<?php
    include('./modules.php');

    if(isset($_SESSION['m_id'])){
        $result['id'] = $_SESSION['m_id'];
        $result['area'] = $_SESSION['m_add1'];
    }else{
        $result['id'] = 'none';
        $result['area'] = 'none';
    }

    print_r(json_encode($result));
?>