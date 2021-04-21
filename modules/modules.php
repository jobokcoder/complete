<?php
    session_start();
    
    function getData($sql){
        $arr = [];
        $conn = new mysqli('localhost', 'root', '', 'complete');
        $result = mysqli_query($conn, $sql);
        while($row = mysqli_fetch_array($result)){
            $arr[] = $row;
        }
        return $arr;
    }

    function setData($sql){
        $conn = new mysqli('localhost', 'root', '', 'complete');
        $result = mysqli_query($conn, $sql);
        if($result){
            return 1;
        }else{
            return 0;
        }
    }
?>