{
    const loading = document.querySelector('.loading');

    
    const menu = document.querySelector('.menu') ? document.querySelector('.menu') : 'none';
    const menuOpenBtn = document.querySelector('.header__icons--item-menu') ? document.querySelector('.header__icons--item-menu') : 'none';
    const menuCloseBtn = document.querySelector('.menu__header--close') ? document.querySelector('.menu__header--close') : 'none';

    const search = document.querySelector('.search') ? document.querySelector('.search') : 'none';
    const searchOpenBtn = document.querySelector('.header__icons--item-search') ? document.querySelector('.header__icons--item-search') : 'none';
    const searchCloseBtn = document.querySelector('.search__cancel') ? document.querySelector('.search__cancel') : 'none';

    const view = document.querySelector('.view');
    const missions = document.querySelectorAll('.missions__list');
    const missionsCloses = document.querySelectorAll('.view__cancel');
    
    window.addEventListener('load', () => {
        const headerLogout = document.querySelector('.header-logout');
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
        }
        headerJoin.addEventListener('click', () => { location.href = './join.php' });
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

    missions.forEach(el => {
        el.addEventListener('click', () => { toggleModal(view); });
    });
    
    missionsCloses.forEach(el => {
        el.addEventListener('click', () => { toggleModal(view); });
    });

    function toggleModal(el){
        el.style.display = el.style.display == 'none' ? 'flex' : 'none';
    }
}