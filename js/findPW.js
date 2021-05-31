{
    const loading = document.querySelector('.loading');

    const findPWSubTitle = document.querySelector('.findPW__subTitle');
    const findPWUserID = document.querySelector('.findPW__input--id');
    const findPWUserIDCheck = document.querySelector('.findPW__input--id-check');
    const findPWUserEmail = document.querySelector('.findPW__input--email');
    const findPWUserEmailCheck = document.querySelector('.findPW__input--email-check');
    const findPWConfirm = document.querySelector('.findPW__input--confirm');
    const findPWButton = document.querySelector('.findPW__input--button');

    const findIDPassword = document.querySelector('.findPW__input--password');
    const findIDPasswordConfirm = document.querySelector('.findPW__input--password-new');

    findPWUserID.addEventListener('keydown', () => {
        const flag = CheckID(findPWUserID.value);
        findPWUserIDCheck.style.display = flag ? 'none' : 'block';
    });

    findPWUserEmail.addEventListener('keydown', () => {
        const flag = CheckEmail(findPWUserEmail.value);
        findPWUserEmailCheck.style.display = flag ? 'none' : 'block';
    });

    findPWButton.addEventListener('click', () => {
        if(findPWButton.textContent === '다음'){
            if((findPWUserIDCheck.style.display !== 'block' && findPWUserID.value !== '') && 
            (findPWUserEmailCheck.style.display !== 'block' && findPWUserEmail.value !== '')){
                checkUserInfo()
                .then((respon) => {
                    if(respon['status'] === 200){
                        loading.style.display = 'flex';
                        findPWUserID.style.display = 'none';
                        findPWUserIDCheck.style.display = 'none';
                        findPWUserEmail.style.display = 'none';
                        findPWUserEmailCheck.style.display = 'none';
                        findPWConfirm.style.display = 'block';
                        findPWButton.textContent = '인증';
                        findPWSubTitle.textContent = '인증코드가 발송되었습니다.';
                        sendMail()
                        .then(() => {
                            loading.style.display = 'none';
                        });
                    }else{
                        alert('아이디와 이메일의 정보가 맞지 않습니다.');
                        return 0;
                    }
                })
            }else{
                alert('아이디와 이메일 모두 알맞게 적어주세요.');
                return 0;
            }
        }else if(findPWButton.textContent === '인증'){
            fetch('./modules/confirmEmail.php')
            .then(res => res.json())
            .then(data => {
                if(findPWConfirm.value == data['code']){
                    findPWSubTitle.textContent = '비밀번호를 재설정해주세요.';
                    findPWButton.textContent = '완료';
                    findPWConfirm.style.display = 'none';
                    findIDPassword.style.display = 'block';
                    findIDPasswordConfirm.style.display = 'block';
                }else{
                    alert('인증이 실패했습니다 !');
                    return 0;
                }
            });
        }else if(findPWButton.textContent === '완료'){
            
        }
    });

    function checkUserInfo(){
        return new Promise((res, rej) => {
            const userInfo = {
                'id': findPWUserID.value,
                'email': findPWUserEmail.value,
            }
            fetch('./modules/checkUserInfo.php', {
                method: 'post',
                body: JSON.stringify(userInfo)
            }).then((respon) => respon.json())
            .then((data) => {
                res(data);
            });
        });
    }

    function sendMail(){
        return new Promise((res, rej) => {
            const userInfo = {
                'email': findPWUserEmail.value,
            }
            fetch('./modules/email.php', {
                method: 'post',
                body: JSON.stringify(userInfo)
            }).then(() => { res(); });
        });
    }

    function CheckID(str){     
        const regID = /^[a-z][a-z\d]{6,12}$/;
        if(str == ''){          
            return true;    
        }
        if(!regID.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }

    function CheckEmail(str){     
        const regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(str == ''){          
            return true;    
        }
        if(!regEmail.test(str)) {
            return false;
        }else {                      
            return true;         
        }           
    }
}