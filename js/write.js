{
    const tagBox = document.querySelector('.write__input--tagbox');
    const tagInput= document.querySelector('.write__input--tag');
    const hashtag = document.querySelector('.hashtag');
    const fileInput = document.querySelector('.write__input--file');
    const fileBtn = document.querySelector('.write__input--filebtn');
    const fileBox = document.querySelector('.write__input--fileBox');
    const fileName = document.querySelector('.write__input--file-name');
    const fileLabel = document.querySelector('.write__input--file-label');
    const doneFileBox = document.querySelector('.done__compensation--fileBox');
    const doneFileInput = document.querySelector('.done__compensation--file');
    const doneFileBtn = document.querySelector('.done__compensation--filebtn');
    const doneFileName = document.querySelector('.done__compensation--file-name');
    const doneCond = document.querySelector('.done__conditions');
    const doneCondBtn = document.querySelector('.done__conditions--header-btn');
    const doneCondContents = document.querySelector('.done__conditions--contents');
    const tagArr = [];
    hashtag.remove();
    fileName.remove();
    doneFileName.remove();
    doneCondContents.remove();

    tagInput.addEventListener('keyup', (e) => {
        if(e.key === ','){
            hash(e.target.value);
        }
    });

    tagInput.addEventListener('keydown', (e) => {
        if(e.key === 'Backspace' && e.target.value === ''){
            removehash();
        }
    });

    fileBtn.addEventListener('click', () => { fileInput.click(); });

    fileInput.addEventListener('change', () => {
        const flag = checkFileExtens(fileInput.files);
        if(flag){
            fileInput.value = "";
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
            const fileNames = document.querySelectorAll('.write__input--file-name');
            fileLabel.remove();
            fileNames.forEach(el => {
                el.remove();
            });
    
            if(fileInput.files.length > 5){
                alert('자료 파일은 최대 5개 입니다.')
                fileBox.appendChild(fileLabel);
                fileInput.value = "";
            }else{
                for(let i=0; i< fileInput.files.length; i++){
                    let files = fileName.cloneNode(true);
                    files.textContent = fileInput.files[i]['name'];
                    fileBox.appendChild(files);
                }
            }
        }
    });

    doneCondBtn.addEventListener('click', () => {
        doneCondBtn.classList.toggle('active');
        doneCondBtn.classList.contains('active') ? addDoneCond() : delDoneCond();
    });

    doneFileBtn.addEventListener('click', () => { doneFileInput.click(); });

    doneFileInput.addEventListener('change', () => {
        const flag = checkFileExtens(doneFileInput.files);
        if(flag){
            doneFileInput.value = "";
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
            const doneFileNames = document.querySelectorAll('.done__compensation--file-name');
            doneFileNames.forEach(el => {
                el.remove();
            });

            if(doneFileInput.files.length > 4){
                alert('자료 파일은 최대 5개 입니다.');
                doneFileInput.value = "";
            }else{
                for(let i=0; i< doneFileInput.files.length; i++){
                    let files = doneFileName.cloneNode(true);
                    files.textContent = doneFileInput.files[i]['name'];
                    doneFileBox.appendChild(files);
                }
            }
        }
    });
    
    function checkFileExtens(files){
        for(let i=0; i<files.length; i++){
            const nameArr = files[i]['name'].split('.');
            if(nameArr[1] != 'gif' && nameArr[1] != 'jpg' && nameArr[1] != 'png' && nameArr[1] != 'mp4'){
                return true;
            }else{
                return false;
            }
        }
    }

    function addDoneCond(){
        const addCond = doneCondContents.cloneNode(true);
        const addCondBtn = addCond.querySelector('.done__conditions--contents-add');
        const allConds = document.querySelectorAll('.done__conditions--contents');
        console.log(allConds.length);
        if(allConds.length+1 > 5){
            alert('조건은 최대 5개까지 가능합니다.');
        }else{
            addCondBtn.addEventListener('click', () => {
                addDoneCond();
            });

            doneCond.appendChild(addCond);
        }
    }

    function delDoneCond(){
        const delConds = document.querySelectorAll('.done__conditions--contents');
        delConds.forEach(el => {
            el.remove();
        });
    }
    
    function hash(str){
        if(tagArr.length < 5){
            let tag = hashtag.cloneNode(true);
            let text = '#' + str.replaceAll(',','');
            tag.textContent = text;
            tagArr.push(text);
            tagBox.prepend(tag);
            tagInput.value = '';
        }
    }

    function removehash(){
        if(tagArr.length > 0){
            const tags = document.querySelectorAll('.hashtag');
            tags[tags.length - 1].remove();
            tagArr.pop();
        }
    }
}