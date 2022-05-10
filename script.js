
const loginMenu = document.querySelector('.login-menu');
const registrationMenu = document.querySelector('.registration-menu');
const triggerLog = document.querySelector('.login');
const switcherToLog = document.querySelector('.switcher-to-log');
const switcherToReg = document.querySelector('.switcher-to-reg');
const logMenu = document.querySelector('.log-menu');

// switcher.forEach(swEl =>{
//     swEl.addEventListener('click', (e) =>{
//         logMenu.classList.toggle('hidden');
//         registrationMenu.classList.toggle('hidden');
//     })
// })
switcherToLog.addEventListener('click', (e) =>{
            logMenu.classList.remove('hidden');
            registrationMenu.classList.add('hidden');
})
switcherToReg.addEventListener('click', (e) =>{
            logMenu.classList.add('hidden');
            registrationMenu.classList.remove('hidden');
})





triggerLog.addEventListener('click', (e) => {
    e.preventDefault();
    loginMenu.classList.remove('hidden');
    registrationMenu.classList.remove('hidden');
})

window.addEventListener('click', (e) =>{
    if(e.target == loginMenu){
        loginMenu.classList.add('hidden');
        registrationMenu.classList.add('hidden');
        logMenu.classList.add('hidden');

    }
})
