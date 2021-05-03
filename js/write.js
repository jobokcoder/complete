{
    const loading = document.querySelector('.loading');
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
    const dateStart = document.querySelector('.write__input--date-start');
    const dateEnd = document.querySelector('.write__input--date-end');
    const write = document.querySelector('.write');
    const writeDoneBtn = document.querySelector('.write__done--btn');
    const writeTitle = document.querySelector('.write__input--title');
    const writeContent = document.querySelector('.write__input--content');
    const writeCompensation = document.querySelector('.done__compensation--contents-text');
    const writeHashTag = document.querySelector('.write__input--hidden');
    const writeDoneCond = document.querySelector('.done__conditions--contents-hidden');
    const tagArr = [];

    setDate();
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
        const fileNames = document.querySelectorAll('.write__input--file-name');
        fileLabel.remove();
        fileNames.forEach(el => {
            el.remove();
        });

        if(flag){
            fileInput.value = "";
            fileBox.appendChild(fileLabel);
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
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

    doneCondBtn.addEventListener('click', () => { addDoneCond(); });

    doneFileBtn.addEventListener('click', () => { doneFileInput.click(); });
    doneFileInput.addEventListener('change', () => {
        const flag = checkFileExtens(doneFileInput.files);
        const doneFileNames = document.querySelectorAll('.done__compensation--file-name');
        doneFileNames.forEach(el => {
            el.remove();
        });

        if(flag){
            doneFileInput.value = "";
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
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

    dateEnd.addEventListener('change', () => {
        const start = new Date(dateStart.value);
        const end = new Date(dateEnd.value);
        const dateDiff = Math.ceil((end.getTime()-start.getTime())/(1000*3600*24));
        
        if(dateDiff < 0){
            alert('종료 일시는 시작 일시보다 늦어야 합니다.');
            dateEnd.value = "";
        }
    });

    writeDoneBtn.addEventListener('click', () => {
        const flag = checkWrite();
        if(flag){
            const allConds = document.querySelectorAll('.done__conditions--contents-text');
            allConds.forEach((item, index) => {
                index !== 0 ? writeDoneCond.value += `,${item.value}` : writeDoneCond.value = item.value;
            });
            loading.style.display = 'flex';
            const formData = new FormData(write);
            fetch('./modules/okWrite.php', {
                method: 'POST',
                body: formData,
            })
            .then(r => r.text())
            .then(data => {
                loading.style.display = 'none';
                console.log(data);
            })
        }
    });

    function setDate(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();

        if(dd < 10){
            dd = `0${dd}`;
        } 

        if(mm < 10){
            mm = `0${mm}`;
        } 

        today = `${yyyy}-${mm}-${dd}`;
        dateStart.setAttribute('min', today);
        dateEnd.setAttribute('min', today);
    }

    function checkWrite(){
        if(writeTitle.value === ''){
            alert('미션의 제목을 적어주세요.');
            return false;
        }else if(dateStart.value === ''){
            alert('시작하는 날짜를 선택해주세요.');
            return false;
        }else if(dateEnd.value === ''){
            alert('끝나는 날짜를 선택해주세요.');
            return false;
        }else if(writeContent.value === ''){
            alert('미션의 내용을 적어주세요.');
            return false;
        }else if(writeCompensation.value === ''){
            alert('미션의 보상 내용을 적어주세요.');
            return false;
        }else{
            return true;
        }
    }
    
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
        if(allConds.length+1 > 5){
            alert('조건은 최대 5개까지 가능합니다.');
        }else{
            addCondBtn.textContent = `${allConds.length+1}. `;
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
        writeHashTag.value = tagArr;
    }

    function removehash(){
        if(tagArr.length > 0){
            const tags = document.querySelectorAll('.hashtag');
            tags[tags.length - 1].remove();
            tagArr.pop();
        }
    }
}