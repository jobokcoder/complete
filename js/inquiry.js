{
    const loading = document.querySelector('.loading');

    const fileBox = document.querySelector('.inquiry__input--fileBox');
    const fileInput = document.querySelector('.inquiry__input--file');
    const fileBtn = document.querySelector('.inquiry__input--filebtn');
    const fileName = document.querySelector('.inquiry__input--file-name');
    const fileLabel = document.querySelector('.inquiry__input--file-label');

    const inquiryEmail = document.querySelector('.inquiry__input--email');
    const inquiryTitle = document.querySelector('.inquiry__input--title');
    const inquiryContent = document.querySelector('.inquiry__input--content');
    const inquiryDoneBtn = document.querySelector('.inquiry__done--btn');

    fileName.remove();

    inquiryDoneBtn.addEventListener('click', () => {
        if(inquiryEmail.value === '' || inquiryTitle.value === '' || inquiryContent.value === ''){
            alert('빈 칸없이 채워주세요.');
            return 0;
        }

        const info = {
            'email': inquiryEmail.value,
            'title': inquiryTitle.value,
            'content': inquiryContent.value,
        };

        loading.style.display = 'flex';
        fetch('./modules/okInquiry.php', {
            method: 'POST',
            body: JSON.stringify(info),
        })
        .then((respon) => respon.json())
        .then((data) => {
            location.href = './index.php';
        })
    });

    fileBtn.addEventListener('click', () => { fileInput.click(); });

    fileInput.addEventListener('change', () => {
        const flag = checkFileExtens(fileInput.files);
        if(flag){
            fileInput.value = "";
            alert('gif, jpg, png, mp4 확장자 파일만 가능합니다.');
        }else{
            const fileNames = document.querySelectorAll('.inquiry__input--file-name');
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
}