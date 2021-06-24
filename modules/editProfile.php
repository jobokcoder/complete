<?php
    include('./modules.php');
    header('Content-Type: application/json; charset=utf-8');

    $id = $_SESSION['m_id'];
    $nick = $_POST['modalNickText'];
    $comment = $_POST['modalCommentText'];
    $path = "../agents/$id.png";
    move_uploaded_file($_FILES['modalFilePic']['tmp_name'], $path);

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