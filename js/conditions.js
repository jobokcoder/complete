{
    const conditionsUseCheck = document.querySelector('.join__conditions--check-use');
    const conditionsInfoCheck = document.querySelector('.join__conditions--check-info');
    const conditionsGPSCheck = document.querySelector('.join__conditions--check-gps');
    const conditionsALLCheck = document.querySelector('.join__conditions--check-all');
    const conditionsALL = document.querySelector('.join__conditions--all-svg');
    const conditionsUse = document.querySelector('.join__conditions--use-svg');
    const conditionsInfo = document.querySelector('.join__conditions--info-svg');
    const conditionsGPS = document.querySelector('.join__conditions--gps-svg');
    const conditionsCancel = document.querySelector('.join__conditions--button-cancel');
    const conditionsAccepet = document.querySelector('.join__conditions--button-accept');
    const conditionsNot = document.querySelector('.join__conditions--not');

    conditionsInfo.addEventListener('click', () => { toggleCheckBox(conditionsInfoCheck); });
    conditionsGPS.addEventListener('click', () => { toggleCheckBox(conditionsGPSCheck); });
    conditionsUse.addEventListener('click', () => { toggleCheckBox(conditionsUseCheck); });
    conditionsALL.addEventListener('click', (event) => { 
        event.preventDefault();
        toggleCheckBox(conditionsALLCheck);
        toggleCheckBox(conditionsInfoCheck);
        toggleCheckBox(conditionsGPSCheck);
        toggleCheckBox(conditionsUseCheck);
     });

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