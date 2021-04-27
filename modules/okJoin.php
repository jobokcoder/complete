<?php
    include('./modules.php');
    $_SESSION['email'] = '';
    
    $response = [];
    $userInfo = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $addArr = explode(' ', $userInfo['user_add'], 3);

    $sql = "SELECT * FROM member WHERE m_email = '".$userInfo['user_email']."'";
    $data = getData($sql);
    $count = count($data);
    if($count > 0){
        $response['status'] = 300;
        print_r(json_encode($response));
    }else{

        $sql = "INSERT INTO member VALUES('".$userInfo['user_id']."', '".$userInfo['user_pw']."', '".$userInfo['user_nick']."', 
        '".$addArr[0]."', '".$addArr[1]."', '".$addArr[2]."', '".$userInfo['user_email']."', '1', '0')";

        $result = setData($sql);
        if($result){
            $response['status'] = 200;
        }else{
            $response['status'] = 400;
        }

        print_r(json_encode($response));
    }

?>