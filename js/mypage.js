{
    const requestCurrents = document.querySelectorAll('.request__current');
    const requestCurrentFriend = document.querySelector('.request__current--friend');
    const requestCurrentRequest = document.querySelector('.request__current--request');
    const requestCurrentResponse = document.querySelector('.request__current--response');
    const requestList = document.querySelectorAll('.request__current--list');
    const requestListArrow = document.querySelectorAll('.request__current--list-arrow');
    const folderWrapper = document.querySelector('.mypage__folder');
    const folders = document.querySelectorAll('.folders');

    requestListArrow.forEach(el => {
        el.parentNode.parentNode.classList.remove('active');
        el.addEventListener('click', () => {
            resetActive(requestList);
            el.parentNode.parentNode.classList.toggle('active');
        });
    });

    folders.forEach((el, index) => {
        el.addEventListener('click', () => { slide(el) });
        setTimeout(() => {
            el.classList.add('active');
        },index*400);
    });

    function slide(dom){
        const prev = document.querySelector('.prev-card');
        const current = document.querySelector('.current-card');
        const next = document.querySelector('.next-card');

        if(dom != current){
            resetCurrent(requestCurrents);
            if(prev === dom){
                prev.classList.forEach(className => {
                    if(className.includes('friend')){
                        requestCurrentFriend.classList.add('current');
                    }else if(className.includes('request')){
                        requestCurrentRequest.classList.add('current');
                    }else if(className.includes('response')){
                        requestCurrentResponse.classList.add('current');
                    }
                });
                prev.classList.remove('prev-card');
                next.classList.remove('next-card');
                current.classList.remove('current-card');

                prev.classList.add('current-card');
                next.classList.add('prev-card');
                current.classList.add('next-card');
                prev.style.zIndex = 20;
                next.style.zIndex = 10;
                current.style.zIndex = 10;
            }else{
                console.log('next Slide !');
                next.classList.forEach(className => {
                    if(className.includes('friend')){
                        requestCurrentFriend.classList.add('current');
                    }else if(className.includes('request')){
                        requestCurrentRequest.classList.add('current');
                    }else if(className.includes('response')){
                        requestCurrentResponse.classList.add('current');
                    }
                });
                prev.classList.remove('prev-card');
                next.classList.remove('next-card');
                current.classList.remove('current-card');

                prev.classList.add('next-card');
                next.classList.add('current-card');
                current.classList.add('prev-card');
                prev.style.zIndex = 10;
                next.style.zIndex = 20;
                current.style.zIndex = 10;
            }
        }
    }
    
    function resetActive(dom){
        dom.forEach(el => {
            el.classList.remove('active');
        });
    }

    function resetCurrent(dom){
        dom.forEach(el => {
            el.classList.remove('current');
        });
    }
}

