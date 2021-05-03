<?php
    include('./modules.php');
    
    $response = [];
    $userInfo = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);

    $sql = "SELECT * FROM member WHERE m_id = '".$userInfo['user_id']."' AND m_pw = '".$userInfo['user_pw']."' ";
    $data = getData($sql);
    $count = count($data);
    if($count > 0){
        $response['status'] = 200;
        $_SESSION['m_id'] = $data[0][0];
        print_r(json_encode($response));
    }else{
        $response['status'] = 300;
        print_r(json_encode($response));
    }

?>