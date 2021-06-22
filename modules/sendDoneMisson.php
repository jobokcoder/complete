<?php
    include('./modules.php');
    header('Content-Type: application/json; charset=utf-8');
    
    $uploadBase = '../upload/';
    $uploadFile = '';
    $uploadname = '';
    
    foreach($_FILES as $f => $fName){
        if($fName['size'] != 0){
            $time = str_replace('.', '', microtime(TRUE));
            usleep(100000);
            $uploadName = explode('.', $fName['name']);
            $uploadname = $time.'.'.$uploadName[1];
            $uploadFile = $uploadBase.$uploadname;

            move_uploaded_file($fName['tmp_name'], $uploadFile);
        }
    }

    $m_id = $_SESSION['m_id'];
    $ms_id = $_POST['ms_id'];
    $c_text = $_POST['send_text'];
    $c_title = $_POST['send_title'];
    $c_hash = $_POST['c_hash'];
    $c_picture = $uploadname;
    $c_date = date("Y-m-d");

    $sql = "select * from mission where ms_id = '$ms_id'";
    $result = getData($sql);

    $ms_writer = $result[0]['ms_writer'];
    $ms_title = $result[0]['ms_title'];
    
    $mailHTML = './notificationDoneRequest.php';
    $semi_rand = md5(time());
    $file = fopen($mailHTML,"rb");
    $data = fread($file,filesize($mailHTML));
    $data = str_replace('{user}', $ms_writer, $data);
    $data = str_replace('{mission}', $ms_title, $data);
    fclose($file);
    
    $sql = "select * from member where m_id = '$ms_writer'";
    $result = getData($sql);

    $to_email = $result[0]['m_email'];
    $subject = "[ Complete ] ✉ 미션 알리미";
    $body = $data;
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    mail($to_email, $subject, $body, implode("\r\n", $headers));

    $sql = "INSERT INTO confirm(c_title, c_picture, c_text, c_hash, c_date, c_stamp, m_id, ms_id) VALUES('$c_title', '$c_picture', '$c_text', '$c_hash', '$c_date', '0', '$m_id', '$ms_id')";
    $result = setData($sql);
    
    if($result){
        $response['status'] = 200;
        print_r(json_encode($response));
    }else{
        $response['status'] = 300;
        print_r(json_encode($response));
    }
    
?>