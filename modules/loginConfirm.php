<?php
    $userID = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : 'none';

    if($userID === 'none'){
        echo("<script>
            alert('로그인 후 이용하실 수 있습니다.');
            history.back();
        </script>");
    }
?>