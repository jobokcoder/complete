<?php
    include('./modules/modules.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/common.css" type="text/css">
    <link rel="stylesheet" href="./css/main.css" type="text/css">
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">

            <?php
                include('./modules/view.php');
            ?>

            <div class="contents__center">

                <div class="slide">
                    <div class="slide__wrapper">
                        <div class="slide__left">
                            <h1 class="slide__left--title">MISSION</h1>

                            <div class="slide__contents">
                                <div class="slide__menu">
                                    <svg class="slide__menu--text slide__menu--text-popluar active" width="35" height="89" viewBox="0 0 35 89">
                                        <text transform="translate(28 89) rotate(-90)" fill="#3a3a3c" font-size="24" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700" opacity="0.5"><tspan x="0" y="0">인기순</tspan></text>
                                    </svg>
                                    <svg class="slide__menu--text slide__menu--text-deadline" width="35" height="89" viewBox="0 0 35 89">
                                        <text transform="translate(28 89) rotate(-90)" fill="#3a3a3c" font-size="24" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700" opacity="0.5"><tspan x="0" y="0">마감임박</tspan></text>
                                    </svg>
                                    <svg class="slide__menu--text slide__menu--text-event" width="35" height="89" viewBox="0 0 35 89">
                                        <text transform="translate(28 89) rotate(-90)" fill="#3a3a3c" font-size="24" font-family="NotoSansCJKkr-Bold, Noto Sans CJK KR" font-weight="700" opacity="0.5"><tspan x="0" y="0">이벤트</tspan></text>
                                    </svg>
                                </div>

                                <div class="slide__contents--wrapper">
                                    <div class="slide__contents--mission">
                                        <div class="slide__mission">
                                            <div class="slide__mission--hash">
                                                <p class="slide__mission--hash-tag"></p>
                                            </div>

                                            <h1 class="slide__mission--title">slide 1</h1>

                                            <p class="slide__mission--text">
                                                해외로 왔다고 착각이드는 이미지를 
                                                찍어서 보내주시면 됩니다!!  
                                                집에서 찍든 동네에서 찍든 그냥 
                                                해외여행 온 것 같은 기분이 들면 
                                                장소는 상관없어요!
                                            </p>

                                            <p class="slide__mission--writer">의뢰자 : 배달에 ㅁㅊ놈</p>
                                            <p class="slide__mission--deadline">마감일 : 2021.05.01</p>
                                        </div>
                                    </div>
                                    
                
                                    <div class="slide__mission--buttons">
                                        <svg class="slide__mission--buttons-left" width="24" height="24" viewBox="0 0 24 24">
                                            <circle id="타원_16" data-name="타원 16" cx="12" cy="12" r="12" fill="#1e3470" opacity="0.1"/>
                                            <path id="패스_157" data-name="패스 157" d="M9034-2348l5.318,5.32,5.32-5.32" transform="translate(-2333.34 -9027.319) rotate(90)" fill="none" stroke="#000" stroke-width="1"/>
                                        </svg>

                                        <p class="slide__mission--now">1 / 8</p>

                                        <svg class="slide__mission--buttons-right" width="24" height="24" viewBox="0 0 24 24">
                                            <circle id="타원_17" data-name="타원 17" cx="12" cy="12" r="12" fill="#1e3470" opacity="0.1"/>
                                            <path id="패스_156" data-name="패스 156" d="M9034-2348l5.318,5.32,5.32-5.32" transform="translate(2357.34 9051.319) rotate(-90)" fill="none" stroke="#000" stroke-width="1"/>
                                        </svg>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="slide__right">
                            <div class="slide__right--wrapper">
                                <div class="slide__right--circle"></div>
                                <div class="slide__right--before-circle"></div>
                                <div class="slide__right--after-circle"></div>
                                <div class="slide__right--center-circle"></div>

                                <div class="slide__right--mission ">
                                    <img class="slide__right--mission-img" src="./images/common/common.png" alt="common"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="missions__header">
                    <h1 class="missions__title">추천미션</h1>
                    <div class="missions__header--circle"></div>
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
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/main.js"></script>
</body>
</html>