{
    const sideMenu = document.querySelector('.contents__left--menuBox') && document.querySelector('.contents__left--menuBox');
    let transY = 0;
    let speed = 0.03;

    requestAnimationFrame(scrollAnimation);

    function scrollAnimation(){
        transY += (window.pageYOffset - transY) * speed;
        sideMenu.style.top = "calc(" + (5) + "rem + " + transY + "px)";
        requestAnimationFrame(scrollAnimation);
    }
}