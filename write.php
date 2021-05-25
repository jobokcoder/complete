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
    <link rel="stylesheet" href="./css/write.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">

            <form class="write" method="POST" enctype="multipart/form-data">
                <input class="write__input write__input--title" type="text" name="m_title" placeholder="제목을 입력하세요."/>
                
                <div class="write__input--tagbox">
                    <p class="hashtag"># 안녕하세요.</p>
                    <input class="write__input write__input--tag" type="text" placeholder="해시태그는 , 로 구분합니다."/>
                </div>

                <div class="write__input--dateBox">
                    <p> 기간 : </p>
                    <input class="write__input--date-start" type="date" name="m_date_s" />
                    <p> ~ </p>
                    <input class="write__input--date-end" type="date" name="m_date_e"/>
                </div>
                
                <div class="write__input--fileBox">
                    <input class="write__input--hidden" type="hidden" name="m_hash" placeholder="제목을 입력하세요."/>
                    <input class="write__input write__input--file" multiple="multiple" type="file" name="m_expain_file[]" accept=".gif, .jpg, .png, .mp4"/>
                    <svg class="write__input--filebtn" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                        <g id="그룹_70" data-name="그룹 70" transform="translate(-9.759 -6.897)">
                            <rect id="사각형_33" data-name="사각형 33" width="22" height="22" rx="1.442" transform="translate(10.259 7.397)" fill="none" stroke="#00285d" stroke-linejoin="round" stroke-width="1"/>
                            <g id="그룹_9" data-name="그룹 9">
                            <path id="패스_135" data-name="패스 135" d="M13.148,23.249l2.711-2.566a1.416,1.416,0,0,1,1.934-.018l1.523,1.389A1.417,1.417,0,0,0,21.289,22L25.2,18.009a1.417,1.417,0,0,1,2.1.073l2.074,2.426" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            <circle id="타원_13" data-name="타원 13" cx="2.017" cy="2.017" r="2.017" transform="translate(15.521 13.545)" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                            </g>
                        </g>
                    </svg>
                    <p class="write__input--file-label">설명에 필요한 파일을 추가해주세요.</p>
                    <p class="write__input--file-name">dsadasdasd.jpg</p>
                </div>
                
                <textarea class="write__input--content" placeholder="무슨 의뢰를 하실건가요" name="m_content"></textarea>
                
                <div class="done__conditions">
                    <div class="done__conditions--header">
                        <p class="done__conditions--header-title">완료조건</p>
                        <svg class="done__conditions--header-btn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path id="path_190" data-name="패스 190" d="M858,93h-7V86h-2v7h-7v2h7v7h2V95h7Z" transform="translate(-842 -86)"/>
                        </svg>
                        <input class="done__conditions--contents-hidden" type="hidden" name="m_cond" />
                    </div>

                    <div class="done__conditions--contents">
                        <p class="done__conditions--contents-add">0</p>
                        <input class="done__conditions--contents-text" type="text" placeholder="조건을 입력하세요">
                    </div>
                </div>

                <div class="done__compensation">
                    <div class="done__compensation--header">
                        <p class="done__compensation--header-title">완료보상</p>
                        <svg class="done__compensation--filebtn" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                            <g id="그룹_70" data-name="그룹 70" transform="translate(-9.759 -6.897)">
                                <rect id="사각형_33" data-name="사각형 33" width="22" height="22" rx="1.442" transform="translate(10.259 7.397)" fill="none" stroke="#00285d" stroke-linejoin="round" stroke-width="1"/>
                                <g id="그룹_9" data-name="그룹 9">
                                <path id="패스_135" data-name="패스 135" d="M13.148,23.249l2.711-2.566a1.416,1.416,0,0,1,1.934-.018l1.523,1.389A1.417,1.417,0,0,0,21.289,22L25.2,18.009a1.417,1.417,0,0,1,2.1.073l2.074,2.426" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                <circle id="타원_13" data-name="타원 13" cx="2.017" cy="2.017" r="2.017" transform="translate(15.521 13.545)" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div class="done__compensation--contents">
                        <input class="done__compensation--contents-text" type="text" name="m_com" placeholder="보상은 무엇인가요"/>
                        <div class="done__compensation--fileBox">
                            <input class="write__input done__compensation--file" multiple="multiple" type="file" name="m_com_file[]" accept=".gif, .jpg, .png, .mp4"/>

                            <p class="done__compensation--file-name">dsadasdasd.jpg</p>
                        </div>
                    </div>
                </div>

                <div class="write__done">
                    <button class="write__done--btn" type="button">의뢰하기</button>
                </div>
            </form>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/write.js"></script>
</body>
</html>