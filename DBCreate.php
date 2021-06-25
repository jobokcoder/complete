<?php

    $result = mysqli_query($conn, $sql);
    $conn = new mysqli("localhost", "root", "");
    $sql = "CREATE DATABASE complete";
    mysqli_query($conn, $sql);

    $conn = new mysqli("localhost", "root", "", "complete");
    $sql = 'CREATE TABLE `agent` (
        `a_id` int(11) NOT NULL,
        `a_status` int(1) NOT NULL DEFAULT 0,
        `m_id` varchar(255) NOT NULL,
        `ms_id` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    mysqli_query($conn, $sql);
    
    $sql = 'CREATE TABLE `member` (
        `m_id` varchar(255) NOT NULL,
        `m_pw` varchar(255) NOT NULL,
        `m_nick` varchar(255) NOT NULL,
        `m_add1` varchar(255) NOT NULL,
        `m_add2` varchar(255) NOT NULL,
        `m_add3` varchar(255) NOT NULL,
        `m_email` varchar(255) NOT NULL,
        `m_level` int(11) DEFAULT 1,
        `m_clear` int(11) DEFAULT 0
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    mysqli_query($conn, $sql);
    
    $sql = 'CREATE TABLE `mission` (
        `ms_id` int(11) NOT NULL,
        `ms_writer` varchar(255) NOT NULL,
        `ms_title` varchar(255) NOT NULL,
        `ms_tag` varchar(255) DEFAULT NULL,
        `ms_expain_pic` varchar(255) DEFAULT NULL,
        `ms_contents` varchar(255) NOT NULL,
        `ms_done_cond` varchar(255) DEFAULT NULL,
        `ms_done_com` varchar(255) NOT NULL,
        `ms_done_pic` varchar(255) DEFAULT NULL,
        `ms_date_start` varchar(255) NOT NULL,
        `ms_date_end` date NOT NULL,
        `ms_lookup` int(11) NOT NULL DEFAULT 0,
        `ms_status` int(1) DEFAULT 0
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    mysqli_query($conn, $sql);
    
    $sql = 'CREATE TABLE `request` (
        `r_id` int(11) NOT NULL,
        `r_status` int(1) NOT NULL DEFAULT 0,
        `m_id` varchar(255) NOT NULL,
        `ms_id` int(11) NOT NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `agent`
    ADD PRIMARY KEY (`a_id`),
    ADD KEY `m_id` (`m_id`),
    ADD KEY `ms_id` (`ms_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `friend`
    ADD PRIMARY KEY (`f_id`),
    ADD KEY `m_id` (`m_id`),
    ADD KEY `m_target_id` (`m_target_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `member`
    ADD PRIMARY KEY (`m_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `mission`
    ADD PRIMARY KEY (`ms_id`),
    ADD KEY `ms_writer` (`ms_writer`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `agent`
    MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `friend`
    MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `mission`
    MODIFY `ms_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `request`
    MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `agent`
    ADD CONSTRAINT `agent_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `member` (`m_id`),
    ADD CONSTRAINT `agent_ibfk_2` FOREIGN KEY (`ms_id`) REFERENCES `mission` (`ms_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `friend`
    ADD CONSTRAINT `friend_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `member` (`m_id`),
    ADD CONSTRAINT `friend_ibfk_2` FOREIGN KEY (`m_target_id`) REFERENCES `member` (`m_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `mission`
    ADD CONSTRAINT `mission_ibfk_1` FOREIGN KEY (`ms_writer`) REFERENCES `member` (`m_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'ALTER TABLE `request`
    ADD CONSTRAINT `request_ibfk_1` FOREIGN KEY (`m_id`) REFERENCES `member` (`m_id`),
    ADD CONSTRAINT `request_ibfk_2` FOREIGN KEY (`ms_id`) REFERENCES `mission` (`ms_id`)';
    mysqli_query($conn, $sql);
    
    $sql = 'COMMIT';
    mysqli_query($conn, $sql);

    mysqli_close($conn);
?>