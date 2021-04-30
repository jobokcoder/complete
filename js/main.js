{
    const loading = document.querySelector('.loading');
    
    loading.style.display = 'flex';
    window.addEventListener('load', () => {
        const missions = document.querySelectorAll('.missions__list');

        missions.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            },(index * 100));
        });

        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 4000,
            },
        });
        
        loading.style.display = 'none';
    });
}