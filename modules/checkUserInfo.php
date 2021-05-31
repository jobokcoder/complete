<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $id = $reciveData['id'];
    $email = $reciveData['email'];
    $sql = "select * from member where m_id = '$id'";
    $result_1 = getData($sql);
    $sql = "select * from member where m_email = '$email'";
    $result_2 = getData($sql);
    $result = [];
    
    if($result_1[0]['m_id'] === $result_2[0]['m_id']){
        $result['status'] = 200;
    }else{
        $result['status'] = 400;
    }

    print_r(json_encode($result));
?>