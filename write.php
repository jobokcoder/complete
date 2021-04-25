<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/common.css" type="text/css">
    <link rel="stylesheet" href="./css/write.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <ul class="contents__left">
                <li class="contents__left--menu">
                    <a href="#">메뉴</a>
                    <svg class="menu__hover--svg" xmlns="http://www.w3.org/2000/svg" width="179.745" height="28.979" viewBox="0 0 179.745 28.979">
                        <path id="패스_89" data-name="패스 89" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(-491.273 194.615) rotate(-90)" fill="#259099"/>
                        <path id="패스_88" data-name="패스 88" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(671.018 -165.636) rotate(90)" fill="#fbc21c"/>
                    </svg>
                </li>
                <li class="contents__left--menu">
                    <a href="#">미션</a>
                    <svg class="menu__hover--svg" xmlns="http://www.w3.org/2000/svg" width="179.745" height="28.979" viewBox="0 0 179.745 28.979">
                        <path id="패스_89" data-name="패스 89" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(-491.273 194.615) rotate(-90)" fill="#259099"/>
                        <path id="패스_88" data-name="패스 88" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(671.018 -165.636) rotate(90)" fill="#fbc21c"/>
                    </svg>
                </li>
                <li class="contents__left--menu">
                    <a href="#">카테고리</a>
                    <svg class="menu__hover--svg" xmlns="http://www.w3.org/2000/svg" width="179.745" height="28.979" viewBox="0 0 179.745 28.979">
                        <path id="패스_89" data-name="패스 89" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(-491.273 194.615) rotate(-90)" fill="#259099"/>
                        <path id="패스_88" data-name="패스 88" d="M165.636,500.855v9.582l14.256-9.582,14.723,9.582v-9.582l-14.723-9.582Z" transform="translate(671.018 -165.636) rotate(90)" fill="#fbc21c"/>
                    </svg>
                </li>
            </ul>

            <form class="write" method="POST" enctype="multipart/form-data">
                <input class="write__input write__input--title" type="text" name="m_contents" placeholder="제목을 입력하세요."/>
                <div class="write__input--tagbox"><p class="hashtag"># 안녕하세요.</p><input class="write__input write__input--tag" type="text" name="m_tag" placeholder="해시태그는 , 로 구분합니다."/></div>
                <div class="write__input--fileBox">
                    <input class="write__input write__input--file" multiple="multiple" type="file" name="filename[]" accept="image/*"/>
                    <button class="write__input--filebtn" type="button">이미지 추가</button>
                </div>
            </form>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/write.js"></script>
</body>
</html>