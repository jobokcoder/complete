{
    const search = document.querySelector('.search') && document.querySelector('.search');
    const searchOpenBtn = document.querySelector('.header__icons--item-search') && document.querySelector('.header__icons--item-search');
    const searchCloseBtn = document.querySelector('.search__cancel') && document.querySelector('.search__cancel');
    
    searchOpenBtn.addEventListener('click', () => { toggleModal(search) });
    searchCloseBtn.addEventListener('click', () => { toggleModal(search) });

    function toggleModal(el){
        el.style.display = el.style.display == 'none' ? 'flex' : 'none';
    }
}