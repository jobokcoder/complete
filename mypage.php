<?php
    include('./modules/modules.php');
    include('./modules/loginConfirm.php');
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
    <link rel="stylesheet" href="./css/mypage.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="mypage">
                <div class="mypage__header">
                    <div class="mypage__user--pic">
                        <img class="mypage__user--pic-img" src="./images/common/common.png" alt="user_profile" />
                    </div>

                    <div class="mypage__user--info">
                        <h1 class="mypage__user--nick">닉네임</h1>
                        <h2 class="mypage__user--add">제주특별자치도 제주시</h2>
                        <p class="mypage__user--comment">임시 글임시 글임시 글임시 글임시 글아임시 글임시 글임시 글임시 글임시 글임
임시 글임시 글임시 글임시 글임시 글이임시 글임시 글임시 글임시 글임시 글야
임시 글임시 글임시 글임시 글임시 글이임시 글임시 글임시 글임시 글임시 글야</p>
                    </div>
                </div>
                
                <nav class="mypage__nav">
                    <div class="mypage__nav--menu mypage__nav--menu-quest active">의뢰한 미션</div>
                    <div class="mypage__nav--menu mypage__nav--menu-agent">수행 중인 미션</div>
                    <div class="mypage__nav--menu mypage__nav--menu-status">수행 신청 현황</div>
                </nav>

                <div class="missions__wrapper">
                    <div class="missions">
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <div class="missions__list--info-hash">
                                    <div class="missions__list--hash-text">dasds</div>
                                </div>
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/mypage.js"></script>
</body>
</html>