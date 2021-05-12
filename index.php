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
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">

        <div class="view">
            <div class="view__contents">
                <button class="view__cancel" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37.828" height="37.828" viewBox="0 0 37.828 37.828">
                        <path id="path_10" d="M17.5-1152.5,0-1135l17.5-17.5L0-1170l17.5,17.5L35-1170l-17.5,17.5L35-1135Z" transform="translate(1.414 1171.414)" fill="none" stroke="#fff" stroke-width="4"/>
                    </svg>
                </button>

                <div class="view__contents--header">
                    <div class="view__contents--left">
                        <div class="view__contents--picture">
                            <img class="view__contents--picture-img" src="./images/common/common.png" alt="mission"/>
                        </div>
                    </div>

                    <div class="view__contents--right">
                        <h1 class="view__contents--title">OO주유소 옆 밭에서 일 도와줄 사람 구합니다</h1>
                        <p class="view__contents--tag">#OO주유소 #밭일 #무 #농작물수확</p>
                        <p class="view__contents--content">
                        제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..
                        </p>

                        <div class="view__contents--done">
                            <div class="view__contents--done-condition">
                                <p class="view__contents--done-title"><strong>완</strong>료조건</p>
                                <ul class="view__contents--done-conditionlist">
                                    <li class="done__list--item">무 다 뽑기</li>
                                </ul>
                            </div>

                            <div class="view__contents--done-compensation">
                                <p class="view__contents--done-title"><strong>완</strong>료보상</p>
                                <p class="view__contents--done-compensationlist"></p>
                            </div>
                        </div>

                        <div class="view__contents--writer">
                            <p class="view__contents--writer-date">기간 : 2021.04.19</p>
                            <p class="view__contents--writer-user">의뢰자 : 홍어</p>
                        </div>
                    </div>
                </div>

                <div class="view__contents--bottom">
                    <div class="view__contents--agentlist">
                        <div class="view__contents--agentlist-agent">
                            
                        </div>
                    </div>

                    <p class="view__contents--num">모집인원 : 4명</p>
                </div>
            </div>
        </div>
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            
            <div class="contents__center">

                <div class="slide">
                    <h1 class="slide__title">MISSION</h1>
                    
                    <div class="slide__container">
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
                        
                        <div class="slide__event">
                            <div class="slide__event--banner">
                                <img class="slide__event--banner-img" src="./images/banner/banner_1.png" alt="event_banner" />
                            </div>

                            <div class="slide__event--banner">
                                <img class="slide__event--banner-img" src="./images/banner/banner_2.png" alt="event_banner" />
                            </div>

                            <div class="slide__event--banner">
                                <img class="slide__event--banner-img" src="./images/banner/banner_3.png" alt="event_banner" />
                            </div>
                        </div>

                        <div class="slide__wrapper">
                            <div class="slide__left">

                                <div class="slide__contents">

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

    
    <svg class="cursor" width="60" height="60" viewBox="0 0 60 60">
        <g id="타원_27" data-name="타원 27" fill="#fff" stroke="#707070" stroke-width="1">
            <circle cx="30" cy="30" r="29.5" fill="none"/>
        </g>
    </svg>

    
<script src="./js/common.js"></script>
<script src="./js/main.js"></script>
</body>
</html>