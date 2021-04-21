{
    const joinFormAdd = document.querySelector('.join__form--input-add');
    const joinFormID = document.querySelector('.join__form--input-id');
    const joinFormPW = document.querySelector('.join__form--input-pw');
    const joinFormNick = document.querySelector('.join__form--input-nick');
    const joinFormEmail = document.querySelector('.join__form--input-email');
    const joinFormNotID = document.querySelector('.join__form--not-id');
    const joinFormNotPW = document.querySelector('.join__form--not-pw');
    const joinFormNotNick = document.querySelector('.join__form--not-nick');
    const joinFormNotEmail = document.querySelector('.join__form--not-email');
    const joinEmailRequestBtn = document.querySelector('.email__confirm--button-request');
    const joinEmailRequestBox = document.querySelector('.email__confirm--box');
    const joinEmailResponseBtn = document.querySelector('.email__confirm--button-response');
    const joinEmailResponseText = document.querySelector('.email__confirm--text');
    let sendReady = false;

    joinFormID.addEventListener('keydown', () => {
        const flag = CheckID(joinFormID.value);
        joinFormNotID.style.display = flag ? 'none' : 'block';
    });
    
    joinFormPW.addEventListener('keydown', () => {
        const flag = CheckPW(joinFormPW.value);
        joinFormNotPW.style.display = flag ? 'none' : 'block';
    });

    joinFormNick.addEventListener('keydown', () => {
        const flag = CheckNick(joinFormNick.value);
        joinFormNotNick.style.display = flag ? 'none' : 'block';
    });
    
    joinFormEmail.addEventListener('keydown', () => {
        const flag = CheckEmail(joinFormEmail.value);
        joinFormNotEmail.style.display = flag ? 'none' : 'block';
        sendReady = flag ? true : false;
    });

    joinEmailRequestBtn.addEventListener('click', (e) => {
        if(sendReady){
            e.preventDefault();
            sendReady ? sendEmail() : '';
        }
    });

    joinEmailResponseBtn.addEventListener('click', () => { confirmEmail(); });
    joinFormAdd.addEventListener('click', () => { sample4_execDaumPostcode(); });

    function sendEmail(){
        joinEmailRequestBox.style.display = 'flex';
        joinFormEmail.readOnly = true;
        joinFormEmail.style.filter = 'grayscale(1)';
        fetch('./modules/email.php', {
            method: 'post',
            body: JSON.stringify({email: joinFormEmail.value})
        });
        sendReady = false;
    }

    function confirmEmail(){
        fetch('./modules/confirmEmail.php')
        .then(res => res.json())
        .then(data => {
            if(joinEmailResponseText.value == data['code']){
                alert('인증이 완료되었습니다 !');
                
            }else{
                alert('인증이 실패했습니다 !');
                return 0;
            }
        });
    }

    // 아이디는 첫 글자 영문, 영문 소문자와 숫자 6~12자리로 입력해야합니다!
    function CheckID(str){     
        const regID = /^[a-z][a-z\d]{6,12}$/;
        if(!regID.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    // 비밀번호는 영문 대소문자와 숫자 4~20자리로 입력해야합니다!
    function CheckPassword(str){     
        const regPW = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,20}$/;
        if(!regPW.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    // 닉네임은 영문 또는 한글 또는 숫자 2~15자리로 입력해야합니다!
    function CheckNick(str){     
        const regNick = /^[a-zA-Z0-9가-힣]{2,15}$/;
        if(!regNick.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    // 이메일을 입력해야합니다!
    function CheckEmail(str){     
        const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!regEmail.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    function sample4_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var roadAddr = data.jibunAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 참고 항목 변수

                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if(data.buildingName !== '' && data.apartment === 'Y'){
                   extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                // document.getElementById("sample4_roadAddress").value = roadAddr;
                const arr = roadAddr.split(" ");
                const add = `${arr[0]} ${arr[1]} ${arr[2]} `;
                joinFormAdd.value = add;
            }
        }).open();
    }
}