<?php
    session_start();

    function getData($sql){
        $conn = new mysqli("localhost", "root", "", "complete");
        $result = mysqli_query($conn, $sql);
        $arr = array();

        while($row = mysqli_fetch_array($result)){
            $arr[] = $row;
        }
        return $arr;
    }

    function setData($sql){
        $conn = mysqli_connect("localhost", "root", "", "complete");
        $result = mysqli_query($conn, $sql);
        return $result;
    }
?>