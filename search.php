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
    <link rel="stylesheet" href="./css/search.css" type="text/css">
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
            <div class="search__wrapper">
                <h1 class="search__title">배달 검색 결과 2개</h1>

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
<script src="./js/search.js"></script>
</body>
</html>