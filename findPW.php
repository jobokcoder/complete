<?php
    include('./modules/modules.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="./images/common/logo.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/common.css" type="text/css">
    <link rel="stylesheet" href="./css/findPW.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="findPW__logo">
                <svg class="findPW__logo--svg" xmlns="http://www.w3.org/2000/svg" width="1080" height="1080" viewBox="0 0 1080 1080">
                    <g id="symbol" transform="translate(1133 -50) rotate(90)">
                        <path id="패스_78" data-name="패스 78" d="M892.152,212.76V368.047a18.612,18.612,0,0,1-8.431,15.41L603.038,571.7a21.043,21.043,0,0,1-23.242,0L295.9,381.3a20.9,20.9,0,0,0-11.618-3.5H70.05C58.977,377.8,50,369.338,50,358.9V195.017c0-10.441,8.977-18.9,20.05-18.9H284.281a20.855,20.855,0,0,1,11.618,3.5l283.9,190.4a21.042,21.042,0,0,0,23.242,0L860.479,197.35C873.75,188.448,892.152,197.4,892.152,212.76Z" transform="translate(0 557.798)" fill="#fbc21c" opacity="0.3" style="isolation: isolate"/>
                        <path id="패스_79" data-name="패스 79" d="M94.083,412.443V257.155a18.612,18.612,0,0,1,8.431-15.41L383.2,53.5a21.042,21.042,0,0,1,23.242,0l283.9,190.4a20.9,20.9,0,0,0,11.618,3.5H916.186c11.073,0,20.049,8.464,20.049,18.91V430.186c0,10.441-8.977,18.91-20.049,18.91l-214.231-.005a20.855,20.855,0,0,1-11.618-3.5l-283.9-190.4a21.042,21.042,0,0,0-23.242,0L125.756,427.852C112.485,436.754,94.083,427.8,94.083,412.443Z" transform="translate(193.765 3)" fill="#259099" opacity="0.3" style="isolation: isolate"/>
                        <path id="패스_81" data-name="패스 81" d="M150,161.23" transform="translate(440 488.833)" fill="#fff"/>
                    </g>
                </svg>
            </div>

            <div class="findPW__form">
                <p class="findPW__title">비밀번호 찾기</p>
                <p class="findPW__subTitle">본인이 등록한 아이디와 이메일을 적어주세요.</p>
                <input class="findPW__input--id" type="text" name="user_id" placeholder="아이디"/>
                <input class="findPW__input--email" type="text" name="user_email" placeholder="이메일"/>
                <input class="findPW__input--confirm" type="text" name="user_confirm" placeholder="인증코드"/>
                <button class="findPW__input--button" type="button">다음</button>
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/findPW.js"></script>
</body>
</html>