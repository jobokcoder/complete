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
        $sql = "update request set r_status = 1 where ms_id = '$ms_id'";
        $result = setData($sql);
    }

    print_r(json_encode($json));
?>