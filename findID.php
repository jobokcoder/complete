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
    <link rel="stylesheet" href="./css/findID.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="findID__logo">
                <svg class="findID__logo--svg" xmlns="http://www.w3.org/2000/svg" width="816.012" height="907.012" viewBox="0 0 816.012 907.012">
                    <path id="패스_78" data-name="패스 78" d="M686.3,203.8v117.33a14.062,14.062,0,0,1-6.371,11.643L467.857,475.007a15.9,15.9,0,0,1-17.561,0l-214.5-143.86a15.789,15.789,0,0,0-8.778-2.645H65.149C56.783,328.5,50,322.107,50,314.218V190.4c0-7.889,6.783-14.284,15.149-14.284H227.015a15.757,15.757,0,0,1,8.778,2.645L450.3,322.613a15.9,15.9,0,0,0,17.561,0L662.371,192.159C672.4,185.433,686.3,192.2,686.3,203.8Z" transform="translate(-50 429.361)" fill="#fbc21c" opacity="0.3" style="isolation: isolate"/>
                    <path id="패스_79" data-name="패스 79" d="M94.083,323.849V206.52a14.062,14.062,0,0,1,6.37-11.643L312.528,52.645a15.9,15.9,0,0,1,17.561,0l214.5,143.86a15.79,15.79,0,0,0,8.778,2.644H715.236c8.366,0,15.149,6.395,15.149,14.288V337.256c0,7.889-6.783,14.288-15.149,14.288l-161.866,0a15.757,15.757,0,0,1-8.778-2.645l-214.5-143.856a15.9,15.9,0,0,0-17.561,0L118.014,335.493C107.987,342.218,94.083,335.456,94.083,323.849Z" transform="translate(85.627 -50)" fill="#259099" opacity="0.3" style="isolation: isolate"/>
                </svg>

            </div>

            <div class="findID__form">
                <p class="findID__title">아이디 찾기</p>
                <p class="findID__subTitle">본인이 등록한 이메일을 적어주세요.</p>
                <input class="findID__input--email" type="text" name="user_email" placeholder="이메일"/>
                <p class="findID__input--email-check">유효하지 않은 이메일 형식입니다!</p>
                <input class="findID__input--confirm" type="text" name="user_confirm" placeholder="인증코드"/>
                <input class="findID__input--id" type="text" name="user_id" readonly/>
                <button class="findID__input--button" type="button">다음</button>
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/findID.js"></script>
</body>
</html>