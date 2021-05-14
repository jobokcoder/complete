<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $obj = [];
    $to_email = 'jyh990321@gmail.com';
    $subject = $reciveData['title'];
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = $reciveData['email'];
    $body = $reciveData['content'];
    
    $result = mail($to_email, $subject, $body, implode("\r\n", $headers));
    $obj['status'] = 200;
    print_r(json_encode($obj));
?>