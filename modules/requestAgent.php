<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 100;

    if(isset($_SESSION['m_id'])){
        $ms_id = $reciveData['id'];
        $m_id = $_SESSION['m_id'];
        $sql = "select * from mission where ms_id = '$ms_id'";
        $result = getData($sql);
        $count = count($result);
        if($result[0]['ms_writer'] == $m_id){
            $json['status'] = 400;
        }else{
            $sql = "select * from request where m_id = '$m_id' and ms_id = '$ms_id'";
            $result = getData($sql);
            $count = count($result);

            if($count > 0){
                $json['status'] = 300;
            }else{
                $sql = "select * from mission where ms_id = '$ms_id'";
                $result = getData($sql);
                $ms_title = $result[0]['ms_title'];
                $ms_writer = $result[0]['ms_writer'];

                $mailHTML = './notificationRequest.php';
                $semi_rand = md5(time());
                $file = fopen($mailHTML,"rb");
                $data = fread($file,filesize($mailHTML));
                $data = str_replace('{user_2}', $m_id, $data);
                $data = str_replace('{mission}', $ms_title, $data);
                $data = str_replace('{user_1}', $ms_writer, $data);
                fclose($file);

                $sql = "select * from member where m_id = '$ms_writer'";
                $result = getData($sql);

                $to_email = $result[0]['m_email'];
                $subject = "[ Complete ] ✉ 미션 알리미";
                $body = $data;
                $headers[] = 'MIME-Version: 1.0';
                $headers[] = 'Content-type: text/html; charset=utf-8';
                
                mail($to_email, $subject, $body, implode("\r\n", $headers));

                $json['status'] = 200;
                $sql = "insert into request(m_id, ms_id) values('$m_id', '$ms_id')";
                $result = setData($sql);
            }
        }
    }else{
        $json['status'] = 500;
    }
    print_r(json_encode($json));
?>