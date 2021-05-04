<?php
    include('./modules.php');
    header('Content-Type: application/json; charset=utf-8');

    $response = [];
    $ms_expain_pic = [];
    $ms_com_pic = [];
    
    $uploadBase = '../upload/';
    $uploadFile = '';
    
    foreach($_FILES as $f => $fName){
        if($_FILES[$f]['size'][0] != 0){
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

    $ms_expain_pic = implode(',', $ms_expain_pic);
    $ms_com_pic = implode(',', $ms_com_pic);

    $ms_writer = $_SESSION['m_id'];
    $ms_title = $_POST['m_title'];
    $ms_tag = $_POST['m_hash'];
    $ms_contents = $_POST['m_content'];
    $ms_done_cond = $_POST['m_cond'];
    $ms_done_com = $_POST['m_com'];
    $ms_done_pic = $ms_com_pic;
    $ms_date_start = $_POST['m_date_s'];
    $ms_date_end = $_POST['m_date_e'];
    $ms_expain_pic = $ms_expain_pic;

    $sql = "INSERT INTO mission(ms_writer, ms_title, ms_tag, ms_expain_pic, ms_contents, ms_done_cond, ms_done_com, ms_done_pic, ms_date_start, ms_date_end)
    VALUES('".$ms_writer."', '".$ms_title."', '".$ms_tag."', '".$ms_expain_pic."', '".$ms_contents."', '".$ms_done_cond."', '".$ms_done_com."', '".$ms_done_pic."', 
    '".$ms_date_start."', '".$ms_date_end."')";
    $result = setData($sql);
    
    if($result){
        $response['status'] = 200;
        print_r(json_encode($response));
    }else{
        $response['status'] = 300;
        print_r(json_encode($response));
    }
    
?>