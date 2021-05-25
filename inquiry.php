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
    <link rel="stylesheet" href="./css/inquiry.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">

            <form class="inquiry" method="POST" enctype="multipart/form-data">
                <h1 class="inquiry__title">문의</h1>
                <input class="inquiry__input inquiry__input--email" type="text" name="m_contents" placeholder="답변 받으실 이메일 주소를 입력하세요."/>

                <input class="inquiry__input inquiry__input--title" type="text" name="m_contents" placeholder="제목을 입력하세요."/>
                
                <div class="inquiry__input--fileBox">
                    <input class="inquiry__input inquiry__input--file" multiple="multiple" type="file" name="m_expain_file" accept=".gif, .jpg, .png, .mp4"/>
                    <svg class="inquiry__input--filebtn" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                        <g id="그룹_70" data-name="그룹 70" transform="translate(-9.759 -6.897)">
                            <rect id="사각형_33" data-name="사각형 33" width="22" height="22" rx="1.442" transform="translate(10.259 7.397)" fill="none" stroke="#00285d" stroke-linejoin="round" stroke-width="1"/>
                            <g id="그룹_9" data-name="그룹 9">
                            <path id="패스_135" data-name="패스 135" d="M13.148,23.249l2.711-2.566a1.416,1.416,0,0,1,1.934-.018l1.523,1.389A1.417,1.417,0,0,0,21.289,22L25.2,18.009a1.417,1.417,0,0,1,2.1.073l2.074,2.426" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <circle id="타원_13" data-name="타원 13" cx="2.017" cy="2.017" r="2.017" transform="translate(15.521 13.545)" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            </g>
                        </g>
                    </svg>
                    <p class="inquiry__input--file-label">설명에 필요한 파일을 추가해주세요.</p>
                    <p class="inquiry__input--file-name">dsadasdasd.jpg</p>
                </div>

                <textarea class="inquiry__input inquiry__input--content" placeholder="무슨 일인지 설명해주세요."></textarea>

                <div class="inquiry__done">
                    <button class="inquiry__done--btn" type="button">문의하기</button>
                </div>
            </form>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/inquiry.js"></script>
</body>
</html>