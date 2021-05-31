{
    const agentModal = document.querySelector('.agent__modal');
    const agentModalCancel = document.querySelector('.agent__bottom--cancel');
    const statusContentsButtons = document.querySelectorAll('.status__contents--button');
    
    statusContentsButtons.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            toggleModal(agentModal);
            getAgent(el);
        });
    });

    agentModalCancel.addEventListener('click', () => {
        toggleModal(agentModal);
    });

    function getAgent(mission){
        console.log(mission);
    }
}