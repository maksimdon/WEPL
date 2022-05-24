
const loginMenu = document.querySelector('.login-menu');
const registrationMenu = document.querySelector('.registration-menu');
const triggerLog = document.querySelectorAll('.login');
const switcherToLog = document.querySelector('.switcher-to-log');
const switcherToReg = document.querySelector('.switcher-to-reg');
const logMenu = document.querySelector('.log-menu');
const burgerTrigger = document.querySelector('.mobile-menu-trigger');
const burgerMenu = document.querySelector('.burger-menu');
const animEl = document.querySelectorAll('.animation-el');



burgerTrigger.addEventListener('click', e => {

    animEl.forEach(el => {
        if (el.style.maxHeight == '300px'){
            el.style.maxHeight = '0px';
            el.style.color = 'transparent';
            
            el.style.backgroundColor = 'transperent';
            burgerMenu.style.backgroundColor = '#001251';
            
        } else {
            el.style.maxHeight = '300px';
            el.style.color = 'white';

            el.style.backgroundColor = 'transperent';
            // burgerMenu.style.backgroundColor = '#001251';
        }


    })
    



    
})

switcherToLog.addEventListener('click', (e) =>{
            logMenu.classList.remove('hidden');
            registrationMenu.classList.add('hidden');
})
switcherToReg.addEventListener('click', (e) =>{
            logMenu.classList.add('hidden');
            registrationMenu.classList.remove('hidden');
})





triggerLog.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        loginMenu.classList.remove('hidden');
        registrationMenu.classList.remove('hidden');
    })
})



window.addEventListener('click', (e) =>{
    if(e.target == loginMenu){
        loginMenu.classList.add('hidden');
        registrationMenu.classList.add('hidden');
        logMenu.classList.add('hidden');

    }
})
