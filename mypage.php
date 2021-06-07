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

        <div class="mypage__modal">
            <div class="mypage__modal--contents">
                <div class="mypage__modal--picture">
                    <img class="mypage__modal--picture-img" src="./images/common/common.png" alt="profile" />
                </div>

                <input class="mypage__modal--nick" type="text" placeholder="닉네임" />
                <textarea class="mypage__modal--comment" type="text" placeholder="자신을 소개해주세요."></textarea>

                <div class="mypage__modal--select">
                    <button class="mypage__modal--select-cancel" type="button">취소</button>
                    <button class="mypage__modal--select-done" type="button">완료</button>
                </div>
            </div>
        </div>

        <div class="agent__modal">
            <div class="agent__form">
                <div class="agent__contents">
                    <div class="agent__users">
                        <div class="agent__users--user">
                            <div class="agent__users--user-pic">
                                <img src="./images/common/common.png" alt="user_pic"/>
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

        <div class="send__modal">
            <div class="send__wrapper">
                <div class="send__modal--cancel">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31.414" height="31.414" viewBox="0 0 31.414 31.414">
                        <path id="합치기_12" data-name="합치기 12" d="M-4037-1195l-15,15,15-15-15-15,15,15,15-15-15,15,15,15Z" transform="translate(4052.706 1210.707)" fill="none" stroke="#fff" stroke-width="2"/>
                    </svg>
                </div>

                <div class="send__left">
                    <div class="send__left--thum">
                        <img class="send__left--thum-img" src="./images/common/common.png" alt="thumnail" />
                    </div>

                    <div class="send__left--contents">
                        <div class="send__left--title">
                            <p class="send__left--title-text">피자 먹기</p>
                        </div>

                        <div class="send__left--hash">
                            <p class="send__left--hash-text">#피자</p>
                            <p class="send__left--hash-text">#직접먹기</p>
                        </div>

                        <div class="send__left--textarea">
                            <p class="send__left--textarea-text">
                                단순히 제가 먹어보고 싶은 피자 종류가 많은데, 다 궁금했습니다.<br>
                                그래서 이 궁금중을 해결하기 위해 여러분이 도와주세요.<br>
                                방법은 간단합니다. 그냥 피자 먹고 리뷰 남겨주세요.
                            </p>
                        </div>

                        <div class="send__left--cond">
                            <p class="send__left--cond-title">완료조건</p>
                            <p class="send__left--cond-text">1. 미션완료 적을때, 주문한 가게이름, 피자이름, 음식리뷰, 별점 까지 싹싹 적어주세요.</p>
                        </div>

                        <div class="send__left--done">
                            <p class="send__left--done-title">완료보상</p>
                            <p class="send__left--done-text">맥도널드 커피 쿠폰</p>
                        </div>

                        <div class="send__left--writer">
                            <p class="send__left--writer-text">마감일 : 2021.05.25 &nbsp;&nbsp; 작성자 : 눈누난나</p>
                        </div>
                    </div>
                </div>

                <div class="send__right">
                    <div class="send__right--title">
                        <h1 class="send__right--title-text">미션완료</h1>
                    </div>

                    <form class="send__right--contents" method="POST" enctype="multipart/form-data">
                        <div class="send__right--subject">
                            <p class="send__right--subject-text">피자먹기</p>
                        </div>

                        <div class="send__right--hash">
                            <p class="send__right--hash-text"></p>
                        </div>

                        <div class="send__right--writer">
                            <p class="send__right--writer-text">마감일 : 2021.05.25 &nbsp;&nbsp; 작성자 : 눈누난나</p>
                        </div>

                        <div class="send__right--file">
                            <input class="send__right--file-input" type="file" name="request__file" accept=".gif, .jpg, .png, .mp4"/>
                            <svg class="send__right--file-btn" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                                <g id="그룹_70" data-name="그룹 70" transform="translate(-9.759 -6.897)">
                                    <rect id="사각형_33" data-name="사각형 33" width="22" height="22" rx="1.442" transform="translate(10.259 7.397)" fill="none" stroke="#00285d" stroke-linejoin="round" stroke-width="1"/>
                                    <g id="그룹_9" data-name="그룹 9">
                                    <path id="패스_135" data-name="패스 135" d="M13.148,23.249l2.711-2.566a1.416,1.416,0,0,1,1.934-.018l1.523,1.389A1.417,1.417,0,0,0,21.289,22L25.2,18.009a1.417,1.417,0,0,1,2.1.073l2.074,2.426" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    <circle id="타원_13" data-name="타원 13" cx="2.017" cy="2.017" r="2.017" transform="translate(15.521 13.545)" fill="none" stroke="#00285d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                                    </g>
                                </g>
                            </svg>
                            <p class="done__compensation--file-name"></p>
                        </div>

                        <div class="send__right--textarea">
                            <textarea class="send__right--textarea-text" name="request_text">
                                
                            </textarea>
                        </div>

                        <div class="send__right--cond">
                            <p class="send__right--cond-title">완료조건</p>
                            <p class="send__right--cond-text">1. 미션완료 적을때, 주문한 가게이름, 피자이름, 음식리뷰, 별점 까지 싹싹 적어주세요.</p>
                        </div>

                        <div class="send__right--confirm">
                            <p class="send__right--date">2021.05.25</p>
                            <p class="send__right--nick">닉네임 : 사람인</p>
                            <div class="send__right--stamp">도장</div>
                        </div>
                    </form>

                    <button class="send__right--submit" type="button">제출</button>
                </div>
            </div>
        </div>
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="mypage">
                <div class="mypage__header">
                    <div class="mypage__user--pic">
                        <img class="mypage__user--pic-img" src="./images/common/common.png" alt="user_profile" />
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
                                <select class="missions__filter--select">
                                    <option value="0">진행중</option>
                                    <option value="1">완료</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="missions__subFunction missions__subFunction--with">
                            <div class="missions__filter">
                                <select class="missions__filter--select">
                                    <option value="0">의뢰중</option>
                                    <option value="1">완료확인요청</option>
                                    <option value="2">완료</option>
                                </select>
                            </div>
                        </div>

                        <div class="missions__subFunction missions__subFunction--accept">
                            <div class="missions__filter">
                                <select class="missions__filter--select">
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