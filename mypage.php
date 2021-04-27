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
    <link rel="stylesheet" href="./css/mypage.css" type="text/css">
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

            <div class="mypage">
                <div class="mypage__info">
                    <div class="mypage__info--background">
                        <img class="mypage__info--background-img" src="./images/common/common.png" alt="profile-background" />
                    </div>

                    <div class="mypage__info--major">
                        <div class="mypage__info--picture">
                            <img class="mypage__info--picture-img" src="./images/common/common.png" alt="profile-picture" />
                        </div>

                        <div class="mypage__info--text">
                            <h1 class="mypage__info--text-nick">사용자 이름</h1>
                            <p class="mypage__info--text-intro">
                                자기소개글 같은거 쫙 나오는 약간 인스타 처럼.....dddddddddddddd. ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                                눈누난나 오묘냐///// 행간 확인할려는거니까 신경쓰지마요 이글
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mypage__folder">
                    <div class="mypage__folder--friend folders prev-card">
                        <svg class="folder" xmlns="http://www.w3.org/2000/svg" width="420" viewBox="0 0 420 290">
                            <path id="folder_path" data-name="패스 112" d="M137.37,430.667H5.25A5.294,5.294,0,0,0,0,436V715.33a5.3,5.3,0,0,0,5.25,5.337h409.5A5.3,5.3,0,0,0,420,715.33V473.268a4.412,4.412,0,0,0-4.375-4.448h-252.7a4.367,4.367,0,0,1-3.847-2.329L141.216,433A4.364,4.364,0,0,0,137.37,430.667Z" transform="translate(0 -430.667)" />
                        </svg>
                        <div class="mypage__folder--info">
                            <p class="mypage__folder--info-title">folder</p>
                            <p class="mypage__folder--info-name">친구</p>
                        </div>
                    </div>

                    <div class="mypage__folder--request folders current-card">
                        <svg class="folder" xmlns="http://www.w3.org/2000/svg" width="420" viewBox="0 0 420 290">
                            <path id="folder_path" data-name="패스 112" d="M137.37,430.667H5.25A5.294,5.294,0,0,0,0,436V715.33a5.3,5.3,0,0,0,5.25,5.337h409.5A5.3,5.3,0,0,0,420,715.33V473.268a4.412,4.412,0,0,0-4.375-4.448h-252.7a4.367,4.367,0,0,1-3.847-2.329L141.216,433A4.364,4.364,0,0,0,137.37,430.667Z" transform="translate(0 -430.667)" />
                        </svg>
                        <div class="mypage__folder--info">
                            <div class="mypage__folder--content">
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                                <div class="mypage__folder--content-person">
                                    <img src="#">
                                </div>
                            </div>
                            <p class="mypage__folder--info-title">folder</p>
                            <p class="mypage__folder--info-name">의뢰</p>
                        </div>
                    </div>
                    
                    <div class="mypage__folder--response next-card folders">
                        <svg class="folder" xmlns="http://www.w3.org/2000/svg" width="420" viewBox="0 0 420 290">
                            <path id="folder_path" data-name="패스 112" d="M137.37,430.667H5.25A5.294,5.294,0,0,0,0,436V715.33a5.3,5.3,0,0,0,5.25,5.337h409.5A5.3,5.3,0,0,0,420,715.33V473.268a4.412,4.412,0,0,0-4.375-4.448h-252.7a4.367,4.367,0,0,1-3.847-2.329L141.216,433A4.364,4.364,0,0,0,137.37,430.667Z" transform="translate(0 -430.667)" />
                        </svg>
                        <div class="mypage__folder--info">
                            <p class="mypage__folder--info-title">folder</p>
                            <p class="mypage__folder--info-name">수행</p>
                        </div>
                    </div>
                </div>

                <div class="request__current request__current--response">
                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">수행 중</h2>
                            <svg class="request__current--list-arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path id="다각형_2" data-name="다각형 2" d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">수행완료확인요청</h2>
                            <svg class="request__current--list-arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path id="다각형_2" data-name="다각형 2" d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap picture">
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

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">의뢰요청현황</h2>
                            <svg class="request__current--list-arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path id="다각형_2" data-name="다각형 2" d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">수행신청현황</h2>
                            <svg class="request__current--list-arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path id="다각형_2" data-name="다각형 2" d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">신청 중</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">완료</h2>
                            <svg class="request__current--list-arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path id="다각형_2" data-name="다각형 2" d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap picture">
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

                <div class="request__current request__current--request current">
                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">의뢰요청현황</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">의뢰완료확인요청</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--date">2021. 02.21</div>
                                <div class="rcliw__item--select">승낙</div>
                                <div class="rcliw__item--delete">
                                    <svg class="trash_can" xmlns="http://www.w3.org/2000/svg" width="32" height="34.31" viewBox="0 0 32 34.31">
                                        <g transform="translate(37.741 -46.907)">
                                            <g class="trash_cap">
                                                <line x2="30" transform="translate(-36.741 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <path d="M-24.685,55.308V50.852a2.953,2.953,0,0,1,2.944-2.945h0A2.953,2.953,0,0,1-18.8,50.852v4.456" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                            <rect width="22.521" height="24.909" transform="translate(-33.001 55.308)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            <g>
                                                <line y2="12.017" transform="translate(-27.033 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-21.741 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                                <line y2="12.017" transform="translate(-16.449 61.436)" fill="none" stroke="#1a1311" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">완료한 의뢰</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap picture">
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

                <div class="request__current request__current--friend">
                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">친구</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">과제에 찌든 대학생</div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">친구 해제</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">과제에 찌든 대학생</div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">친구 해제</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">과제에 찌든 대학생</div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">친구 해제</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">보낸 신청</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="request__current--list">
                        <div class="request__current--list-header">
                            <h2 class="request__current--list-title">받은 신청</h2>
                            <svg class="request__current--list-arrow arrow" xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32">
                                <path d="M20.5,0,41,32H0Z" fill="#1e3470"/>
                            </svg>
                        </div>
                        <div class="request__current--list-wrap">
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-accept">수락</div>
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-accept">수락</div>
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                            <div class="rcliw__item">
                                <div class="rcliw__item--wrap">
                                    <div class="rcliw__item--picture"></div>
                                    <div class="rcliw__item--title">저 대신에 택배 붙여주세요 </div>
                                </div>
                                <div class="rcliw__item--select">
                                    <div class="rcliw__item--select-accept">수락</div>
                                    <div class="rcliw__item--select-cancel">거절</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contents__right">

            </div>
        </div>
    </div>
<script src="./js/mypage.js"></script>
</body>
</html>