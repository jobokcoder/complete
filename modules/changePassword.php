<?php
    include('./modules.php');
    
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $id = $reciveData['id'];
    $pw = $reciveData['pw'];
    $result = [];
    $sql = "update member SET m_pw = '$pw' where m_id = '$id'";
    $query = setData($sql);
    
    if($query){
        $result['status'] = 200;
    }else{
        $result['status'] = 400;
    }

    print_r(json_encode($result));
?>