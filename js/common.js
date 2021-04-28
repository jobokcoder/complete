{
    const search = document.querySelector('.search') && document.querySelector('.search');
    const searchOpenBtn = document.querySelector('.header__icons--item-search') && document.querySelector('.header__icons--item-search');
    const searchCloseBtn = document.querySelector('.search__cancel') && document.querySelector('.search__cancel');
    
    searchOpenBtn.addEventListener('click', () => { toggleModal(search) });
    searchCloseBtn.addEventListener('click', () => { toggleModal(search) });

    function toggleModal(el){
        el.style.display = el.style.display == 'none' ? 'flex' : 'none';
    }

    // const logoutBtn = document.querySelector('.header__icons--item-logout');
    // const loading = document.querySelector('.loading');

    // logoutBtn.addEventListener('click', () => {
    //     loading.style.display = 'flex';

    //     fetch('./modules/logout.php')
    //     .then(respon => respon.json())
    //     .then(result => {
    //         setTimeout(() => {
    //             if(result['status'] === 200){
    //                 location.href = './index.php';
    //             }
    //         },500);
    //     });
    // });

    const view = document.querySelector('.view');
    const missions = document.querySelectorAll('.missions__list');
    const missionsCloses = document.querySelectorAll('.view__cancel');

    missions.forEach(el => {
        el.addEventListener('click', () => { toggleModal(view); });
    });
    
    missionsCloses.forEach(el => {
        el.addEventListener('click', () => { toggleModal(view); });
    });
}