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
                        <div class="mypage__user--nickBox">
                            <h1 class="mypage__user--nick">닉네임</h1>
                            <div class="mypage__user--edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25.919" height="25.919" viewBox="0 0 25.919 25.919">
                                    <g id="그룹_22" data-name="그룹 22" transform="translate(-344.421 19.423)">
                                        <rect id="사각형_418" data-name="사각형 418" width="4.784" height="23.616" rx="0.57" transform="translate(363.399 -15.866) rotate(45)" fill="#00285d"/>
                                        <rect id="사각형_419" data-name="사각형 419" width="4.784" height="4.051" rx="0.432" transform="translate(366.957 -19.423) rotate(45)" fill="#00285d"/>
                                        <path id="패스_155" data-name="패스 155" d="M346.585,2.1l2.227,2.227c.254.255.062.761-.344.905l-3.452,1.225a.419.419,0,0,1-.561-.561l1.225-3.452C345.824,2.042,346.33,1.85,346.585,2.1Z" fill="#00285d"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <h2 class="mypage__user--add">제주특별자치도 제주시</h2>
                        <p class="mypage__user--comment">임시 글임시 글임시 글임시 글임시 글아임시 글임시 글임시 글임시 글임시 글임
임시 글임시 글임시 글임시 글임시 글이임시 글임시 글임시 글임시 글임시 글야
임시 글임시 글임시 글임시 글임시 글이임시 글임시 글임시 글임시 글임시 글야</p>
                    </div>
                </div>
                
                <nav class="mypage__nav">
                    <div class="mypage__nav--menu quest active">의뢰한 미션</div>
                    <div class="mypage__nav--menu agent">수행 중인 미션</div>
                    <div class="mypage__nav--menu status">수행 신청 현황</div>
                </nav>

                <div class="mypage__contents">
                    <div class="missions__subFunction">
                        <div class="missions__filter">
                            <select class="missions__filter--select">
                                <option value="1">진행중</option>
                                <option value="2">완료</option>
                            </select>
                        </div>
                    </div>

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

                    <div class="account__wrapper">
                        <div class="missions__account">
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">아이디</p>
                                <p class="missions__account--item-content">dasdasdk</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">비밀번호</p>
                                <p class="missions__account--item-content">●●●●●●●●</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">이메일</p>
                                <p class="missions__account--item-content">dlatldlapdlf@naver.com</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">주소</p>
                                <p class="missions__account--item-content">제주특별자치도 제주시 용담일동</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">회원탈퇴</p>
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