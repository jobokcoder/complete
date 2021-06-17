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
                            <input class="send__right--subject-text" type="text" name="send_title" placeholder="제목을 입력하세요." />
                        </div>
                        
                        <div class="write__input--tagbox">
                            <p class="hashtag"># 안녕하세요.</p>
                            <input class="write__input write__input--tag" type="text" placeholder="해시태그는 , 로 구분합니다."/>
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
                            <textarea class="send__right--textarea-text" name="request_text"></textarea>
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
                        <input class="send__right--mission-id" type="hidden" name="ms_id" value="" />
                    </form>

                    <button class="send__right--submit" type="button">제출</button>
                </div>
            </div>
        </div>