<?php
    include('./modules.php');

    $reciveData = json_decode(file_get_contents('php://input'), true, 512, JSON_THROW_ON_ERROR);
    $json = [];
    if(isset($_SESSION['m_id'])){
        $ms_id = $reciveData['id'];
        $m_id = $_SESSION['m_id'];
        $sql = "select * from request where m_id = '$m_id' and ms_id = '$ms_id'";
        $result = getData($sql);
        $count = count($result);

        if($count > 0){
            $json['status'] = 300;
            return 0;
        }else{
            $json['status'] = 200;
            $sql = "insert into request(m_id, ms_id) values('$m_id', '$ms_id')";
            $result = setData($sql);
            return 0;
        }
    }else{
        $json['status'] = 400;
        return 0;
    }
    print_r(json_encode($json));
?>