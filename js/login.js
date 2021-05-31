{
    const loginId = document.querySelector('.login__form--input-text');
    const loginPass = document.querySelector('.login__form--input-pass');
    const loginBtn = document.querySelector('.login__form--input-button');
    const loading = document.querySelector('.loading');

    const findID = document.querySelector('.login__form--find-id');
    const findPW = document.querySelector('.login__form--find-pw');

    findID.addEventListener('click', () => { 
        location.href = './findID.php';
    });

    findPW.addEventListener('click', () => { 
        location.href = './findPW.php';
    });

    loginBtn.addEventListener('click', () => {
        
        if(loginId.value === '' || loginPass.value === ''){
            alert('빈칸없이 채워주세요.');
            return 0;
        }

        const userInfo = {
            user_id: loginId.value,
            user_pw: loginPass.value,
        };

        loading.style.display = 'flex';
        fetch('./modules/okLogin.php', {
            method: 'post',
            body: JSON.stringify(userInfo)
        }).then(respon => respon.json())
        .then(result => {
            setTimeout(() => {
                if(result['status'] === 300){
                    loading.style.display = 'none';
                    alert('아이디 혹은 비밀번호가 잘못되었습니다.');
                }else if(result['status'] === 200){
                    location.href = './index.php';
                }
            },500);
        });

    });
    
        
}