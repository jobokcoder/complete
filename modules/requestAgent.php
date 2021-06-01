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
            $ms_id = $reciveData['id'];
            $m_id = $_SESSION['m_id'];
            $sql = "select * from request where m_id = '$m_id' and ms_id = '$ms_id'";
            $result = getData($sql);
            $count = count($result);

            if($count > 0){
                $json['status'] = 300;
            }else{
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