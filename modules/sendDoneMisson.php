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
    $c_text = $_POST['request_text'];
    $c_picture = $uploadname;
    $c_date = date("Y-m-d");

    $sql = "INSERT INTO confirm(c_picture, c_text, c_date, c_stamp, m_id, ms_id) VALUES('$c_picture', '$c_text', '$c_date', '0', '$m_id', '$ms_id')";
    $result = setData($sql);
    
    if($result){
        $response['status'] = 200;
        print_r(json_encode($response));
    }else{
        $response['status'] = 300;
        print_r(json_encode($response));
    }
    
?>