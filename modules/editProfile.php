<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $obj;
    $id = $reciveData['id'];
    $nick = $reciveData['nick'];
    $comment = $reciveData['comment'];

    $sql = "update member set m_nick = '$nick', m_comment = '$comment' where m_id = '$id'";
    $result = setData($sql);

    $sql = "select * from member where m_id = '$id'";
    $result = getData($sql);
    $count = count($result);

    if($count > 0){
        $result['status'] = 200;
    }else{
        $result['status'] = 300;
    }
    
    print_r(json_encode($result));
?>