{
    const allMissions = document.querySelectorAll('.missions__list');
    const newMissions = [];
    allMissions.forEach((el) => {   
        if(el.classList.contains('active') === false){
            newMissions.push(el);
        }
    });

    newMissions.forEach((el, index) => {
        el.classList.add('active');
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        },200 * index);
    });
}