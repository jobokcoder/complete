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

        <div class="passchange__modal">
            <div class="passchange__form">
                <div class="passchange__form--title">
                    <h1 class="passchange__form--title-text">비밀번호 변경</h1>
                </div>

                <div class="passchange__form--inputBox">
                    <p class="passchange__form--inputBox-title">현재 비밀번호 :</p>
                    <input class="passchange__form--now-pass" type="password" placeholder="현재 비밀번호를 적어주세요." />
                </div>

                <div class="passchange__form--inputBox">
                    <p class="passchange__form--inputBox-title">변경 비밀번호 :</p>
                    <input class="passchange__form--change-pass" type="password" placeholder="변경할 비밀번호를 적어주세요." />
                </div>

                <p class="passchange__form--change-text">비밀번호는 영문 대소문자와 숫자 4~20자리로 입력해야합니다!</p>

                <div class="passchange__form--select">
                    <button class="passchange__form--select-cancel" type="button">취소</button>
                    <button class="passchange__form--select-done" type="button">완료</button>
                </div>
            </div>
        </div>

        <div class="mypage__modal">
            <form class="mypage__modal--contents" method="post" enctype="multipart/form-data">
                <div class="mypage__modal--picture">
                    <img class="mypage__modal--picture-img" src="#" alt="profile" />
                    <input class="mypage__modal--picture-file" type="file" name="modalFilePic" accept=".gif, .jpg, .png" />
                </div>

                <input class="mypage__modal--nick" type="text" name="modalNickText" placeholder="닉네임" />
                <textarea class="mypage__modal--comment" type="text" name="modalCommentText" placeholder="자신을 소개해주세요."></textarea>

                <div class="mypage__modal--select">
                    <button class="mypage__modal--select-cancel" type="button">취소</button>
                    <button class="mypage__modal--select-done" type="button">완료</button>
                </div>
            </form>
        </div>

        <div class="agent__modal">
            <div class="agent__form">
                <div class="agent__contents">
                    <div class="agent__users">
                        <div class="agent__users--user">
                            <div class="agent__users--user-pic">
                                <img src="#" alt="user_pic"/>
                            </div>
                            <p class="agent__users--user-name">과제에 찌든 놈</p>
                        </div>
                    </div>

                    <div class="agent__numbering">
                        <div class="agent__numbering--wrapper">
                        </div>

                        <p class="agent__numbering--text">총 0명</p>
                    </div>
                </div>

                <div class="agent__bottom">
                    <button class="agent__bottom--cancel">취소</button>
                    <button class="agent__bottom--select">선택</button>
                </div>
            </div>
        </div>

        <?php
            include('./modules/sendForm.php');
            include('./modules/doneForm.php');
            include('./modules/doneMission.php');
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="mypage">
                <div class="mypage__header">
                    <div class="mypage__user--pic">
                        <img class="mypage__user--pic-img" src="#" alt="user_profile" />
                    </div>

                    <div class="mypage__user--info">
                        <div class="mypage__user--nickBox">
                            <h1 class="mypage__user--nick"></h1>
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
                        <p class="mypage__user--comment"></p>
                    </div>

                    <div class="mypage__user--status">
                        <div class="mypage__user--status-box">
                            <p class="mypage__user--status-title">성공</p>
                            <p class="mypage__user--status-complete"></p>
                        </div>
                        <div class="mypage__user--status-center">
                            <div class="mypage__user--status-bar">
                                <div class="mypage__user--status-number">
                                    <p class="mypage__user--complete-percent"></p>
                                    <p class="mypage__user--fail-percent"></p>
                                </div>
                                <div class="mypage__user--status-grid">
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                    <div class="mypage__user--status-grids"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mypage__user--status-box">
                            <p class="mypage__user--status-title">실패</p>
                            <p class="mypage__user--status-fail"></p>
                        </div>
                    </div>
                </div>
                
                <nav class="mypage__nav">
                    <div class="mypage__nav--menu quest active">미션</div>
                    <div class="mypage__nav--menu agent">같이하기</div>
                    <div class="mypage__nav--menu application">신청현황</div>
                    <div class="mypage__nav--menu status">계정</div>
                </nav>

                <div class="mypage__contents">
                    <div class="mypage__subFunction--wrapper">
                        <div class="missions__subFunction missions__subFunction--mission active">
                            <div class="missions__filter">
                                <select class="missions__filter--select missions__filter--select-mission">
                                    <option value="0">진행중</option>
                                    <option value="1">완료</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="missions__subFunction missions__subFunction--with">
                            <div class="missions__filter">
                                <select class="missions__filter--select missions__filter--select-with">
                                    <option value="0">의뢰중</option>
                                    <option value="1">완료확인요청</option>
                                    <option value="2">완료</option>
                                </select>
                            </div>
                        </div>

                        <div class="missions__subFunction missions__subFunction--accept">
                            <div class="missions__filter">
                                <select class="missions__filter--select missions__filter--select-accept">
                                    <option value="0">같이하기현황</option>
                                    <option value="1">미션신청현황</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="missions__wrapper missions__wrapper--mission active">
                        <div class="missions">
                            <div class="missions__list">
                                <div class="missions__list--image">
                                    <img src="./images/common/common.png" alt="missions" />
                                    <div class="missions__list--image-opacity"></div>
                                </div>

                                <div class="missions__list--info">
                                    <div class="missions__list--info-hash">
                                        <div class="missions__list--hash-text"></div>
                                    </div>
                                    <div class="missions__list--info-title"></div>
                                    <p class="missions__list--info-writer"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="missions__wrapper missions__wrapper--with">
                        <div class="missions">
                            <div class="missions__list">
                                <div class="missions__list--image">
                                    <img src="./images/common/common.png" alt="missions" />
                                    <div class="missions__list--image-opacity"></div>
                                </div>

                                <div class="missions__list--info">
                                    <div class="missions__list--info-hash">
                                        <div class="missions__list--hash-text"></div>
                                    </div>
                                    <div class="missions__list--info-title"></div>
                                    <p class="missions__list--info-writer"></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="status__wrapper">
                        <div class="status__header">
                            <p class="status__header--text">제목</p>
                            <p class="status__header--text">의뢰일</p>
                            <p class="status__header--text">마감일</p>
                            <p class="status__header--text">인원선택</p>
                        </div>
                    </div>

                    <div class="account__wrapper">
                        <div class="missions__account">
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">아이디</p>
                                <p class="missions__account--item-content missions__account--item-id">dasdasdk</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">비밀번호</p>
                                <p class="missions__account--item-content missions__account--item-pw">●●●●●●●●</p>
                                <button class="missions__account--password-change">변경</button>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">이메일</p>
                                <p class="missions__account--item-content missions__account--item-email">dlatldlapdlf@naver.com</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title">주소</p>
                                <p class="missions__account--item-content missions__account--item-add">제주특별자치도 제주시 용담일동</p>
                            </div>
                            <div class="missions__account--item">
                                <p class="missions__account--item-title missions__account--item-goodbye">회원탈퇴</p>
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