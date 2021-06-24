{
    const loading = document.querySelector('.loading');
    
    const findIDSubTitle = document.querySelector('.findID__subTitle');
    const findIDButton = document.querySelector('.findID__input--button');
    const findIDUserID = document.querySelector('.findID__input--id');
    const findIDEmail = document.querySelector('.findID__input--email');
    const findIDConfirm = document.querySelector('.findID__input--confirm');
    const findIDEmailCheck = document.querySelector('.findID__input--email-check');

    findIDEmail.addEventListener('keyup', () => {
        const flag = CheckEmail(findIDEmail.value);
        findIDEmailCheck.style.display = flag ? 'none' : 'block';
    });

    findIDButton.addEventListener('click', () => {
        if(findIDButton.textContent === '다음'){
            if(findIDEmailCheck.style.display !== 'block' && findIDEmail.value !== ''){
                loading.style.display = 'flex';
                findIDEmail.style.display = 'none';
                findIDEmailCheck.style.display = 'none';
                findIDSubTitle.textContent = '인증코드가 발송되었습니다.';
                findIDButton.textContent = '인증';
                findIDConfirm.style.display = 'block';
                sendMail()
                .then(() => {
                    loading.style.display = 'none';
                });
            }else{  
                alert('이메일을 적어주세요.');
                return 0;
            }
        }else if(findIDButton.textContent === '인증'){
            fetch('./modules/confirmEmail.php')
            .then(res => res.json())
            .then(data => {
                if(findIDConfirm.value == data['code']){
                    getUserID()
                    .then((respson) => {
                        findIDSubTitle.textContent = '아이디 찾기가 완료되었습니다.';
                        findIDButton.textContent = '로그인 하러가기';
                        findIDConfirm.style.display = 'none';
                        findIDUserID.value = respson;
                        findIDUserID.style.display = 'block';
                    });
                }else{
                    alert('인증이 실패했습니다 !');
                }
            });
        }else if(findIDButton.textContent === '로그인 하러가기'){
            location.href = './login.php';
        }
    });

    function getUserID(){
        return new Promise((res) => {
            const userInfo = {
                'email': findIDEmail.value,
            }
            fetch('./modules/getUserID.php', {
                method: 'post',
                body: JSON.stringify(userInfo),
            }).then((respon) => respon.text())
            .then((data) => {
                res(data);
            });
        });
    }
    
    function sendMail(){
        return new Promise((res, rej) => {
            const userInfo = {
                'email': findIDEmail.value,
            }
            fetch('./modules/email.php', {
                method: 'post',
                body: JSON.stringify(userInfo)
            }).then(() => { res(); });
        });
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