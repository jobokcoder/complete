{
    window.addEventListener('load', () => {
        const missions = document.querySelectorAll('.rank__contents--list');

        missions.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            },(index * 100));
        });
    });
}