<?php
    include('./modules.php');
    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $ms_id = $reciveData['ms_id'];
    $stamp = $reciveData['stamp'];

    $sql = "select * from confirm where ms_id = '$ms_id'";
    $result = getData($sql);
    foreach($result as $item){
        $m_id = $item['m_id'];
        if($stamp == 0){
            $sql = "update member set m_fail = (m_fail + 1) where m_id = '$m_id'"; 
        }else{
            $sql = "update member set m_complete = (m_complete + 1) where m_id = '$m_id'"; 
        }
        $result = setData($sql);

        $sql = "delete from agent where m_id = '$m_id' and ms_id = '$ms_id'"; 
        $result = setData($sql);
    }

    $sql = "update confirm set c_stamp = '$stamp' where ms_id = '$ms_id'";
    $result = setData($sql);
    $sql = "update mission set ms_status = '1' where ms_id = '$ms_id'";
    $result = setData($sql);
    $json = [];
    if($result){
        $json['status'] = 200;
        print_r(json_encode($json));
    }
?>