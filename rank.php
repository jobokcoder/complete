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
    <link rel="stylesheet" href="./css/rank.css" type="text/css">
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
            ?>

            <div class="rank">
                <div class="rank__header">
                    <div class="rank__header--left">
                        <svg xmlns="http://www.w3.org/2000/svg" width="69.85" height="77.545" viewBox="0 0 69.85 77.545">
                            <path id="패스_134" data-name="패스 134" d="M150.92,46.874h-9.127V45.655a3.719,3.719,0,0,0-3.661-3.766h-36.4a3.723,3.723,0,0,0-3.668,3.766v1.219H89.337A3.842,3.842,0,0,0,85.5,50.711v5.747a21.917,21.917,0,0,0,11.8,19.7l3.5,1.793c2.714,6.154,7.264,11.542,12.845,13.226.309.1.625.171.939.251v7.788h-2.894a3.413,3.413,0,0,0-3.409,3.409v3.447h-3.638a3.2,3.2,0,0,0-3.2,3.2v9.163H139.3v-9.163a3.2,3.2,0,0,0-3.2-3.2h-3.638v-3.447a3.413,3.413,0,0,0-3.41-3.409h-3.576V91.375c.24-.064.483-.119.719-.192,5.586-1.686,10.139-7.077,12.853-13.234l3.495-1.788a21.917,21.917,0,0,0,11.8-19.7V50.3A3.433,3.433,0,0,0,150.92,46.874ZM98.325,74.152A19.928,19.928,0,0,1,87.757,56.458V50.711a1.581,1.581,0,0,1,1.58-1.58h8.726V65.87a29.2,29.2,0,0,0,1.53,8.931Zm37.781,34.179a.941.941,0,0,1,.94.94v6.905h-33.34v-6.905a.941.941,0,0,1,.94-.94h31.461Zm-7.047-6.855a1.153,1.153,0,0,1,1.152,1.152v3.447h-19.67v-3.447a1.153,1.153,0,0,1,1.151-1.152h17.367Zm-5.834-9.4v7.142h-6.382V92.077h6.382Zm2.319-3.053a18.067,18.067,0,0,1-5.337.8h-.558a18.078,18.078,0,0,1-5.343-.8c-8.242-2.488-13.986-14.2-13.986-23.153V45.655a1.465,1.465,0,0,1,1.412-1.509h36.4a1.461,1.461,0,0,1,1.4,1.509V65.87C139.536,74.824,133.792,86.535,125.544,89.024Zm26.547-32.566a19.929,19.929,0,0,1-10.569,17.694l-1.259.644a29.175,29.175,0,0,0,1.53-8.926V49.132h9.127a1.173,1.173,0,0,1,1.171,1.172Z" transform="translate(-84.999 -41.389)" fill="#3a3a3c" stroke="#3a3a3c" stroke-miterlimit="10" stroke-width="1"/>
                        </svg>

                        <div class="rank__header--left-text">
                            <h1 class="rank__header--left-title">전체 랭킹</h1>
                            <p class="rank__header--left-subtitle"><a href="#">이번 달 랭킹</a></p>
                        </div>
                    </div>

                    <div class="rank__header--right">
                        <button class="rank__header--right-agent active" type="button">수행자</button>
                        <button class="rank__header--right-client" type="button">의뢰자</button>
                    </div>
                </div>

                <div class="rank__center">
                    <p class="rank__center--text">순위</p>
                    <p class="rank__center--text">이름</p>
                    <p class="rank__center--text">미션완료수</p>
                </div>

                <div class="rank__contents">
                    <div class="rank__contents--list ranker">
                        <div class="rank__contents--list-num">1</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list ranker">
                        <div class="rank__contents--list-num">2</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list ranker">
                        <div class="rank__contents--list-num">3</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">4</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">5</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">6</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">7</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">8</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">9</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                    
                    <div class="rank__contents--list">
                        <div class="rank__contents--list-num">10</div>
                        <div class="rank__contents--list-user">
                            <div class="rank__contents--list-pic">
                                <img src="./images/common/common.png" alt="common"/>
                            </div>
                            <p class="rank__contents--list-nick">요원</p>
                            <p class="rank__contents--list-level">Lv. 21</p>
                        </div>
                        <div class="rank__contents--list-count">47번</div>
                    </div>
                </div>
            </div>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/side.js"></script>
<script src="./js/rank.js"></script>
</body>
</html>