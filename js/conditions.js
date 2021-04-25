{
    const conditionsUseCheck = document.querySelector('.join__conditions--check-use');
    const conditionsInfoCheck = document.querySelector('.join__conditions--check-info');
    const conditionsGPSCheck = document.querySelector('.join__conditions--check-gps');
    const conditionsUse = document.querySelector('.join__conditions--use-svg');
    const conditionsInfo = document.querySelector('.join__conditions--info-svg');
    const conditionsGPS = document.querySelector('.join__conditions--gps-svg');
    const conditionsCancel = document.querySelector('.join__conditions--button-cancel');
    const conditionsAccepet = document.querySelector('.join__conditions--button-accept');
    const conditionsNot = document.querySelector('.join__conditions--not');
    const conditionsForm = document.querySelector('.join__conditions');
    const conditions = {
        use: false,
        info: false,
        gps: false,
    };

    conditionsInfo.addEventListener('click', () => { toggleCheckBox(conditionsInfoCheck); });
    conditionsGPS.addEventListener('click', () => { toggleCheckBox(conditionsGPSCheck); });
    conditionsUse.addEventListener('click', () => { toggleCheckBox(conditionsUseCheck); });

    conditionsCancel.addEventListener('click', () => {
        history.back();
    });

    conditionsAccepet.addEventListener('click', () => {
        if(conditionsInfoCheck.checked && conditionsGPSCheck.checked && conditionsUseCheck.checked){
            location.href = './join.php';
        }else{
            conditionsNot.style.display = 'block';
        }
    });
    function toggleCheckBox(el){
        el.checked = el.checked == false ? true : false;
    }
}