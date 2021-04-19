{
    window.addEventListener('load', () => {
        const missions = document.querySelectorAll('.missions__list');

        missions.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            },(index * 100));
        });
    });
}