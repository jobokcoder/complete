{
    const inquiryBtn = document.querySelector('.cService__list--email');
    const faqListTitle = document.querySelectorAll('.cService__faq--list-title');

    inquiryBtn.addEventListener('click', () => { location.href = './inquiry.php' });
    
    faqListTitle.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('active');
        });
    });
}