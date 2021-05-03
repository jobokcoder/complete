<?php
    include('./modules.php');
    header('Content-Type: application/json; charset=utf-8');

    print_r($_FILES['m_expain_file']);
    print_r($_POST);
    
?>