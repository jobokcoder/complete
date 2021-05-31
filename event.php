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
    <link rel="stylesheet" href="./css/event.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="event">
                <h1 class="event__title"><strong class="event__title--strong">5</strong>월 이벤트</h1>

                <div class="event__contents">
                    <div class="event__contents--item">
                        <div class="event__contents--item-img">
                            <img src="./images/common/0515.jpg" alt="event"/>
                        </div>
                        
                        <div class="event__contents--hashBox">
                            <b class="event__contents--hashTag"># 스승의 날</b>
                            <b class="event__contents--hashTag"># 스승의 은혜</b>
                            <b class="event__contents--hashTag"># 꽃 선물</b>
                        </div>

                        <p class="event__contents--title">교수님께 꽃 선물하기</p>
                        <p class="event__contents--subtitle">스승의 날</p>

                        <p class="event__contents--date">2021.5.12 ~ 2021.5.19</p>
                    </div>
                    
                    <div class="event__contents--item">
                        <div class="event__contents--item-img">
                            <img src="./images/common/0508.jpg" alt="event"/>
                        </div>
                        
                        <div class="event__contents--hashBox">
                            <b class="event__contents--hashTag"># 어버이날</b>
                            <b class="event__contents--hashTag"># 꽃 선물</b>
                            <b class="event__contents--hashTag"># 부모님</b>
                        </div>

                        <p class="event__contents--title">부모님께 어버이날 선물하기</p>
                        <p class="event__contents--subtitle">어버이날</p>

                        <p class="event__contents--date">2021.5.6 ~ 2021.5.10</p>
                    </div>

                    <div class="event__contents--item">
                        <div class="event__contents--item-img">
                            <img src="./images/common/0505.png" alt="event"/>
                        </div>
                        
                        <div class="event__contents--hashBox">
                            <b class="event__contents--hashTag"># 오늘은</b>
                            <b class="event__contents--hashTag"># 어린이날</b>
                            <b class="event__contents--hashTag"># 어른이날(?)</b>
                        </div>

                        <p class="event__contents--title">자녀 동생에게 즐거운 하루 보내주기</p>
                        <p class="event__contents--subtitle">어린이날</p>

                        <p class="event__contents--date">2021.5.02 ~ 2021.5.06</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
</body>
</html>