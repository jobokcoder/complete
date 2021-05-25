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
    <link rel="stylesheet" href="./css/login.css" type="text/css">
    <title>Complete</title>
</head>
<body>
    <div class="wrapper">
        
        <?php
            include('./modules/header.php');
        ?>

        <div class="contents">
            <div class="login__logo">
                <svg class="login__logo--svg" xmlns="http://www.w3.org/2000/svg" width="905" height="905" viewBox="0 0 905 905">
                    <g id="symbol" transform="translate(-50 -53)">
                        <path id="패스_78" data-name="패스 78" d="M755.692,206.821V336.946a15.6,15.6,0,0,1-7.065,12.913L513.425,507.6a17.632,17.632,0,0,1-19.476,0l-237.9-159.549a17.511,17.511,0,0,0-9.736-2.933H66.8c-9.279,0-16.8-7.092-16.8-15.841V191.953c0-8.749,7.522-15.841,16.8-15.841H246.319a17.476,17.476,0,0,1,9.736,2.933l237.9,159.544a17.632,17.632,0,0,0,19.476,0l215.726-144.68C740.272,186.45,755.692,193.949,755.692,206.821Z" transform="translate(0 447.465)" fill="#fbc21c" opacity="0.3" style="isolation: isolate"/>
                        <path id="패스_79" data-name="패스 79" d="M94.083,353.713V223.589a15.6,15.6,0,0,1,7.065-12.913L336.35,52.933a17.632,17.632,0,0,1,19.476,0l237.9,159.549a17.512,17.512,0,0,0,9.736,2.933H782.974c9.279,0,16.8,7.092,16.8,15.846V368.582c0,8.749-7.522,15.846-16.8,15.846l-179.518,0a17.476,17.476,0,0,1-9.736-2.933l-237.9-159.544a17.632,17.632,0,0,0-19.476,0L120.624,366.626C109.5,374.085,94.083,366.585,94.083,353.713Z" transform="translate(155.225 3)" fill="#259099" opacity="0.3" style="isolation: isolate"/>
                        <path id="패스_81" data-name="패스 81" d="M150,161.23" transform="translate(352.5 392.086)" fill="#fff"/>
                    </g>
                </svg>
            </div>

            <div class="login__form">
                <div class="login__form--logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="176" height="56" viewBox="0 0 176 56">
                        <g id="logo" transform="translate(-0.873 -2.114)">
                          <path id="패스_70" data-name="패스 70" d="M170.479,33.3a2.9,2.9,0,0,0-2.039-.851,3.333,3.333,0,0,0-2.039.851l-7.735,6.214-6.491-5.146-.378-.3V27.589l13.894.006h2.5a1.825,1.825,0,0,0,.3-.026,2.92,2.92,0,0,0,1.987-.849c.952-1.045,1.266-3.1,0-4.106l-8.6-6.8-1.25-.989a3.056,3.056,0,0,0-2.038-.85,3.323,3.323,0,0,0-2.039.85L150.738,19.5l-3.286,2.641c-.19.152-.395.3-.575.461a3.249,3.249,0,0,0-.846,2.586v9.045c0,1.244-.064,2.55,1.037,3.423l2.766,2.193,6.806,5.4a3.055,3.055,0,0,0,2.039.851,3.333,3.333,0,0,0,2.039-.851l8.539-6.861,1.222-.981a2.916,2.916,0,0,0,.844-2.053A2.966,2.966,0,0,0,170.479,33.3ZM162,23.238l-6.723,0,3.333-2.678Z" transform="translate(5.55 0)" fill="#1b8e99"/>
                          <path id="패스_71" data-name="패스 71" d="M149.913,33.4a2.891,2.891,0,0,0-2.039-.85,3.335,3.335,0,0,0-2.038.85l-4.806,3.833q0-1.459-.009-2.919L141,27.666l4.514,0h2.5a2.9,2.9,0,0,0,0-5.807l-7.029,0q0-.857-.005-1.714l-.01-3.265a2.884,2.884,0,1,0-5.767,0q.009,2.488.016,4.976l-4.564,0h-2.5a2.9,2.9,0,0,0,0,5.807l7.079,0q.018,6.133.038,12.265.006,1.633.011,3.265a2.911,2.911,0,0,0,1.772,2.654,2.963,2.963,0,0,0,3.149-.6l8.512-6.788,1.2-.955a2.91,2.91,0,0,0,.844-2.053A2.968,2.968,0,0,0,149.913,33.4Z" transform="translate(5.55 0)" fill="#fec900"/>
                          <path id="패스_72" data-name="패스 72" d="M130.192,33.3a2.894,2.894,0,0,0-2.038-.851,3.328,3.328,0,0,0-2.039.851l-7.736,6.214-6.491-5.146-.377-.3v-6.45l14.328.008h2.423a2.141,2.141,0,0,0,1.126-.336,2.5,2.5,0,0,0,.8-.569c.953-1.045,1.267-3.1,0-4.106l-8.6-6.8-1.25-.989a3.059,3.059,0,0,0-2.039-.85,3.321,3.321,0,0,0-2.038.85L110.452,19.5l-3.286,2.641c-.191.152-.395.3-.575.461a3.249,3.249,0,0,0-.846,2.586v9.045c0,1.244-.064,2.55,1.037,3.423l2.766,2.193q3.4,2.7,6.806,5.4a3.053,3.053,0,0,0,2.039.851,3.328,3.328,0,0,0,2.038-.851l8.54-6.861,1.221-.981a2.912,2.912,0,0,0,.845-2.053A2.967,2.967,0,0,0,130.192,33.3ZM121.75,23.268l-6.795,0,3.369-2.706Z" transform="translate(4.01 0)" fill="#00245b"/>
                          <g id="그룹_6" data-name="그룹 6" transform="translate(107.169 2.114)">
                            <path id="패스_73" data-name="패스 73" d="M103.7,5V35.354a2.883,2.883,0,1,0,5.766,0V5A2.883,2.883,0,1,0,103.7,5Z" transform="translate(-103.703 -2.114)" fill="#1b8e99"/>
                          </g>
                          <path id="패스_74" data-name="패스 74" d="M107.5,25.151a3.328,3.328,0,0,0-.9-2.642c-.381-.346-.821-.645-1.225-.963l-4.944-3.882-3.62-2.844a3.07,3.07,0,0,0-2.039-.844,3.333,3.333,0,0,0-2.038.844l-5.818,4.641-3.287,2.622c-.19.151-.394.3-.574.458a2.439,2.439,0,0,0-.745,1.353,2.8,2.8,0,0,0-.1.752V34.09c0,.193,0,.388,0,.582V55a2.883,2.883,0,1,0,5.766,0V41.212l4.843,3.813a3.063,3.063,0,0,0,2.038.845,3.34,3.34,0,0,0,2.039-.845l8.54-6.812,1.221-.974a2.274,2.274,0,0,0,.652-1.011A2.813,2.813,0,0,0,107.5,35.2Q107.5,30.176,107.5,25.151Zm-19.15,9.071-.377-.3V25.946l6.813-5.435,6.542,5.138.406.319q0,3.933,0,7.867l-6.892,5.5Z" transform="translate(3.11 0.227)" fill="#ffca00"/>
                          <path id="패스_75" data-name="패스 75" d="M85.821,22.509c-.381-.346-.821-.645-1.226-.963l-4.944-3.882-3.62-2.844a3.067,3.067,0,0,0-2.038-.844,3.336,3.336,0,0,0-2.039.844l-7.425,5.924-4.069-3.2L56.84,14.7A3.066,3.066,0,0,0,54.8,13.86a3.345,3.345,0,0,0-2.039.845l-8.006,6.387c-1.3,1.034-2.518,1.732-2.518,3.656V35.183a2.883,2.883,0,1,0,5.766,0V25.83L54.817,20.4l6.542,5.138.07.055V35.3a2.916,2.916,0,0,0,2.883,2.883,3.139,3.139,0,0,0,1.723-.6,2.829,2.829,0,0,0,1.494-2.493V25.679l6.478-5.168,6.543,5.138.4.319q0,3.948,0,7.9V35.2a2.883,2.883,0,1,0,5.766,0q0-5.025,0-10.05A3.327,3.327,0,0,0,85.821,22.509Z" transform="translate(1.823 0.085)" fill="#00245b"/>
                          <path id="패스_76" data-name="패스 76" d="M46.534,25.231a3.365,3.365,0,0,0-.9-2.661c-.381-.348-.821-.65-1.226-.97l-4.944-3.91-3.62-2.864a3.056,3.056,0,0,0-2.038-.85,3.323,3.323,0,0,0-2.039.85L25.948,19.5l-3.286,2.641c-.19.152-.4.3-.575.461a3.249,3.249,0,0,0-.846,2.586v9.045c0,1.244-.064,2.55,1.037,3.423l2.766,2.193,6.806,5.4a3.055,3.055,0,0,0,2.039.851,3.333,3.333,0,0,0,2.039-.851l8.539-6.861,1.222-.981a2.3,2.3,0,0,0,.652-1.018,2.85,2.85,0,0,0,.192-1.034ZM27.385,34.366l-.378-.3V26.031l6.813-5.474,6.543,5.175.405.321v7.923l-6.891,5.536Z" transform="translate(0 0)" fill="#198e9a"/>
                          <path id="패스_77" data-name="패스 77" d="M25.321,33.3a2.9,2.9,0,0,0-2.039-.851,3.328,3.328,0,0,0-2.038.851l-7.736,6.214L7.017,34.366l-.377-.3V26.031l6.813-5.474L20,25.732l1.25.989a3.132,3.132,0,0,0,2.039.85,2.923,2.923,0,0,0,2.038-.85c.953-1.045,1.267-3.1,0-4.106l-8.6-6.8-1.249-.989a3.059,3.059,0,0,0-2.039-.85,3.326,3.326,0,0,0-2.039.85L5.581,19.5,2.294,22.141c-.19.152-.395.3-.575.461a3.252,3.252,0,0,0-.845,2.586v9.045c0,1.244-.064,2.55,1.036,3.423l2.766,2.193,6.807,5.4a3.05,3.05,0,0,0,2.038.851,3.331,3.331,0,0,0,2.039-.851l8.54-6.861,1.221-.981a2.916,2.916,0,0,0,.844-2.053A2.966,2.966,0,0,0,25.321,33.3Z" transform="translate(0 0)" fill="#fec900"/>
                        </g>
                    </svg>
                </div>

                <form class="login__form--input" autocomplete="off">
                    <input class="login__form--input-text" type="text" name="user_id" placeholder="아이디"/>
                    <input class="login__form--input-pass" type="password" name="user_pw" placeholder="비밀번호"/>
                    <button class="login__form--input-button" type="button" name="submit" value="login">로그인</button>
                    <a class="login__form--input-link" href="#">아이디 / 비밀번호 찾기</a>
                </form>
            </div>
        </div>
    </div>
<script src="./js/common.js"></script>
<script src="./js/login.js"></script>
</body>
</html>