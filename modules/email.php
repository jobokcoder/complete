<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $mailHTML = './mail.php';
    $semi_rand = md5(time());
    $file = fopen($mailHTML,"rb");
    $data = fread($file,filesize($mailHTML));
    $data = str_replace('{code}', $semi_rand, $data);
    fclose($file);

    $to_email = $reciveData['email'];
    $subject = "[ Complete ] ✉ 인증메일 발송";
    $body = $data;
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $arr['code'] = $semi_rand;
    $_SESSION['email'] = $semi_rand;
    
    mail($to_email, $subject, $body, implode("\r\n", $headers));
?>