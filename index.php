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
                include('./modules/side.php');
                include('./modules/view.php');
            ?>

            <div class="contents__center">

                <div class="banner__images--slider">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img class="swiper-slide--img" src="./images/banner/banner_01.png" alt="banner"/>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-slide--img" src="./images/banner/banner_02.png" alt="banner"/>
                            </div>
                            <div class="swiper-slide">
                                <img class="swiper-slide--img" src="./images/banner/banner_03.png" alt="banner"/>
                            </div>
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
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
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <div class="missions__list--info-text">제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">이삿짐 정리해주실 분</p>
                                <div class="missions__list--info-text">ㅇㅇㅇㅇㅇㅇㅇ</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">카페 신메뉴 먹으실분</p>
                                <div class="missions__list--info-text">제가 새로운 커피 레시피 개발했는데, 맛 봐주실 분을 구합니다...</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                    </div>

                    <div class="missions">
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <div class="missions__list--info-text">제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <div class="missions__list--info-text">제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <div class="missions__list--info-text">제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                        <div class="missions__list">
                            <div class="missions__list--image">
                                <img src="./images/common/common.png" alt="missions" />
                                <div class="missions__list--image-opacity"></div>
                            </div>

                            <div class="missions__list--info">
                                <p class="missions__list--info-title">짐 정리 도와주실분</p>
                                <div class="missions__list--info-text">제가 무지 짐 정리를 못하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능.하는데 주변에 도와 줄 사람이 없어서 , 주말에 가능..</div>
                                <p class="missions__list--info-writer">의뢰자 : 홍어<br>게시일 : 2021.03.24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/side.js"></script>
<script src="./js/main.js"></script>
<script src="./js/swiper-bundle.min.js"></script>
</body>
</html>