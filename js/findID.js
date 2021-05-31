{
    const findIDEmail = document.querySelector('.findID__input--email');
    
    findIDEmail.addEventListener('keydown', () => {
        const flag = CheckEmail(findIDEmail.value);
        joinFormNotEmail.style.display = flag ? 'none' : 'block';
        sendStatus = flag ? true : false;
    });

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