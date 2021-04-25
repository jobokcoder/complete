{
    const tagBox = document.querySelector('.write__input--tagbox');
    const tagInput= document.querySelector('.write__input--tag');
    const hashtag = document.querySelector('.hashtag');
    const fileInput = document.querySelector('.write__input--file');
    const fileBtn = document.querySelector('.write__input--filebtn');
    const tagArr = [];
    hashtag.remove();

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

    fileInput.addEventListener('change', () => {
        console.log(fileInput[0].value);
    });

    fileBtn.addEventListener('click', () => { fileInput.click(); });
    

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