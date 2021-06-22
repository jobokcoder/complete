<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    $json['status'] = 100;
    $json['data'] = [];
    $agents = $reciveData['agents'];
    $ms_id = $reciveData['id'];

    foreach($agents as $key => $value) {
        $sql = "insert into agent(m_id, ms_id) values('$value', '$ms_id')";
        $result = setData($sql);
        $json['status'] = 200;
    }

    if($json['status'] === 200){

        $sql = "select * from agent where ms_id = '$ms_id'";
        $result = getData($sql);
        $agent_id = $result[0]['m_id'];
        
        $sql = "select * from mission where ms_id = '$ms_id'";
        $result = getData($sql);
        $ms_title = $result[0]['ms_title'];
        $ms_done_cond = $result[0]['ms_done_cond'];
        
        $mailHTML = './notificationAccept.php';
        $semi_rand = md5(time());
        $file = fopen($mailHTML,"rb");
        $data = fread($file,filesize($mailHTML));
        $data = str_replace('{user}', $agent_id, $data);
        $data = str_replace('{mission}', $ms_title, $data);
        $data = str_replace('{cond}', $ms_done_cond, $data);
        fclose($file);

        $sql = "select * from member where m_id = '$agent_id'";
        $result = getData($sql);

        $to_email = $result[0]['m_email'];
        $subject = "[ Complete ] ✉ 미션 알리미";
        $body = $data;
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        
        mail($to_email, $subject, $body, implode("\r\n", $headers));

        $sql = "update request set r_status = 1 where ms_id = '$ms_id'";
        $result = setData($sql);
    }

    print_r(json_encode($json));
?>