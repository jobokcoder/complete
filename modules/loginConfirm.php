<?php
    $userID = isset($_SESSION['m_id']) ? $_SESSION['m_id'] : 'none';

    if($userID === 'none'){
        echo("<script>
            alert('로그인 후 이용하실 수 있습니다.');
            location.href = './index.php';
        </script>");
    }
?>