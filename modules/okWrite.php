<?php
    include('./modules.php');
    header('Content-Type: application/json; charset=utf-8');

    // print_r($_FILES);

    $ms_expain_pic = [];
    $ms_com_pic = [];
    
    $uploadBase = '../upload/';
    $uploadFile = '';
    foreach($_FILES as $f => $fName){
        if(isset($_FILES[$f])){
            foreach ($fName['name'] as $value => $fi) {
                $time = str_replace('.', '', microtime(TRUE));
                usleep(100000);
                $uploadName = explode('.', $fi);
                $uploadname = $time.'.'.$uploadName[1];
                $uploadFile = $uploadBase.$uploadname;

                move_uploaded_file($fName['tmp_name'][$value], $uploadFile);
                if('m_expain_file' == $f){
                    array_push($ms_expain_pic, $uploadname);
                }else{
                    array_push($ms_com_pic, $uploadname);
                }
            }
        }
    }
    

    print_r($ms_expain_pic);
    print_r($ms_com_pic);
    // print_r($_POST);

    $ms_title = $_POST['m_title'];
    $ms_tag = $_POST['m_hash'];
    $ms_contents = $_POST['m_content'];
    // echo $_POST['m_cond'] == '';
    $ms_done_com = $_POST['m_title'];
    $ms_done_pic = $_POST['m_title'];
    $ms_date_s = $_POST['m_title'];
    $ms_date_e = $_POST['m_title'];
?>