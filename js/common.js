{
    const wrapper = document.querySelector('.wrapper');
    const loading = document.querySelector('.loading');
    
    const menu = document.querySelector('.menu') ? document.querySelector('.menu') : 'none';
    const menuOpenBtn = document.querySelector('.header__icons--item-menu') ? document.querySelector('.header__icons--item-menu') : 'none';
    const menuCloseBtn = document.querySelector('.menu__header--close') ? document.querySelector('.menu__header--close') : 'none';

    const search = document.querySelector('.search') ? document.querySelector('.search') : 'none';
    const searchOpenBtn = document.querySelector('.header__icons--item-search') ? document.querySelector('.header__icons--item-search') : 'none';
    const searchCloseBtn = document.querySelector('.search__cancel') ? document.querySelector('.search__cancel') : 'none';

    let speed = 0.03;
    let cursorX = 0, cursorY = 0;
    let x = 0, y = 0;
    let circleColor = ['2EA0AA', 'F5CE33', '1E3470', '3A3A3C'];
    let cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (event) => {
        x = event.clientX;
        y = event.clientY;

        createMouseTrail();
    });

    requestAnimationFrame(cursorMove);

    function cursorMove(){
        cursorX += (x - cursorX) * speed;
        cursorY += (y - cursorY) * speed;
        requestAnimationFrame(cursorMove);
    }

    function createMouseTrail(){
        for(let i = 0; i < 1; i++){
            let newCircle = document.createElement('div');
            let size = Math.ceil(Math.random() * 20);
            let randNum = Math.floor(Math.random() * 4);
            let randSign = Math.floor(Math.random() * 2);
            let randRange = 6;
            
            newCircle.style.position = `fixed`;
            newCircle.style.zIndex = 100;
            newCircle.style.width = `${size}px`;
            newCircle.style.height = `${size}px`;
            newCircle.style.left = randSign === 0 ? `${x + (Math.floor(Math.random() * 4) * randRange - randRange / 2)}px` : `-${x + (Math.floor(Math.random() * 4) * randRange - randRange / 2)}px`;
            newCircle.style.top = randSign === 0 ? `${y + (Math.floor(Math.random() * 4) * randRange - randRange / 2)}px` : `-${y + (Math.floor(Math.random() * 4) * randRange - randRange / 2)}px`;
            newCircle.style.transform = `translate(-50%, -50%)`;
            newCircle.style.borderRadius = `70%`;
            newCircle.style.backgroundColor = `#${circleColor[randNum]}`;
            newCircle.style.pointerEvents = 'none';
            newCircle.style.animation = 'fadeOut 1000ms';

            wrapper.appendChild(newCircle);
            setTimeout(() => {
                wrapper.removeChild(newCircle);
            }, Math.round(Math.random() * 1000));
        }
    }
    
    window.addEventListener('load', () => {
        const headerLogout = document.querySelector('.header-logout');
        const headerMyPage = document.querySelector('.header-mypage');
        const headerLogin = document.querySelector('.header-login');
        const headerJoin = document.querySelector('.header-join');
        const headermission = document.querySelector('.header-mission');
        const headerWrite = document.querySelector('.header-write');
        const headerEvent = document.querySelector('.header-event');
        const headerCService = document.querySelector('.header-cService');
        
        if(headerLogout === null){
            headerLogin.addEventListener('click', () => { location.href = './login.php' });
        }else{
            headerLogout.addEventListener('click', () => { location.href = './logout.php' });
            headerMyPage.addEventListener('click', () => { location.href = './mypage.php' });
        }
        headerJoin.addEventListener('click', () => { location.href = './conditions.php' });
        headermission.addEventListener('click', () => { location.href = './index.php' });
        headerWrite.addEventListener('click', () => { location.href = './write.php' });
        headerEvent.addEventListener('click', () => { location.href = './event.php' });
        headerCService.addEventListener('click', () => { location.href = './cService.php' });
    });

    searchOpenBtn.addEventListener('click', () => { toggleModal(search); });
    searchCloseBtn.addEventListener('click', () => { toggleModal(search); });
    
    menuOpenBtn.addEventListener('click', () => { menu.style.transform = 'translateX(0%)'; });
    menuCloseBtn.addEventListener('click', () => { menu.style.transform = 'translateX(105%)'; });

    if(document.querySelector('.header__icons--item-logout')){
        const logoutBtn = document.querySelector('.header__icons--item-logout');

        logoutBtn.addEventListener('click', () => {
            loading.style.display = 'flex';
    
            fetch('./modules/logout.php')
            .then(respon => respon.json())
            .then(result => {
                setTimeout(() => {
                    if(result['status'] === 200){
                        location.href = './index.php';
                    }
                },500);
            });
        });
    }

    function toggleModal(el){
        el.style.display = el.style.display == 'none' ? 'flex' : 'none';
    }
}