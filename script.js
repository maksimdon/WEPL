
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
        // if (el.style.maxHeight == '300px'){
        //     el.style.maxHeight = '0px';
            
        //     el.style.color = 'transparent';
            
        //     el.style.backgroundColor = 'transperent';
        //     burgerMenu.style.backgroundColor = '#001251';
        //     burgerMenu.classList.remove('.hidden')
        //     setTimeout(() => el.style.maxWidth = '0px', 400);
            
            
        // } else {
        //     el.style.maxHeight = '300px';
            
        //     el.style.color = 'white';
        //     burgerMenu.classList.remove('hidden')
        //     el.style.backgroundColor = 'transperent';
        //     el.style.maxWidth = '100%';
        //     // burgerMenu.style.backgroundColor = '#001251';
        // }
        if (el.classList.contains('hidden')){
            el.classList.remove('hidden');
            el.style.maxHeight = '300px';
            el.style.color = 'white';
        } else {
            el.style.color = 'transperent';
            el.style.maxHeight = '0px';
            setTimeout(() => el.classList.add('hidden'), 300);
            // el.style.color = 'transparent
            
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




// const loginMenu = document.querySelector('.login-menu');
// const registrationMenu = document.querySelector('.registration-menu');
// const triggerLog = document.querySelector('.login');
// const switcherToLog = document.querySelector('.switcher-to-log');
// const switcherToReg = document.querySelector('.switcher-to-reg');
// const logMenu = document.querySelector('.log-menu');

// switcher.forEach(swEl =>{
//     swEl.addEventListener('click', (e) =>{
//         logMenu.classList.toggle('hidden');
//         registrationMenu.classList.toggle('hidden');
//     })
// 
class Dropdown{
    constructor(selector, options){
      this.$el = document.querySelector(selector);
      this.items = options.items;
  
      this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;
  
      
  
      this.$el.addEventListener('click', event => {
        if(event.target.classList.contains('dropdown__label')){
          if(this.$el.classList.contains('open')){
            this.close();
          } else {
            this.open();
          }
        } else if(event.target.tagName.toLowerCase() == 'li') {
          this.select(event.target.dataset.id)
        }
      })
  
  
  
      const itemsHTML = this.items.map(i =>{
        return `<li data-id="${i.id}">${i.label}</li>`
      }).join(' ');
  
  
      this.$el.querySelector('.dropdown__menu').innerHTML = itemsHTML;
  
    }
  
    select(id){
      const item = this.items.find(i => i.id == id)
      this.$el.querySelector('.dropdown__label').textContent = item.label;
      this.close();
    }
  
    open(){
      this.$el.classList.add('open');
    }
    close(){
  
      this.$el.classList.remove('open');
    }
  }
  
  const dropdown = new Dropdown('#dropdown', {
    items: [
      {label: 'CS:GO', id: 'csgo'},
      {label: 'Desnity', id: 'dest'},
      {label: 'Dota', id: 'dota'},
      {label: 'Valorant', id: 'valorant'},
      {label: 'Overwatch', id: 'Overwatch'}
    ]
  })
  const dropdownregion = new Dropdown('#dropdown-region', {
    items: [
      {label: 'Asia', id: 'Asia'},
      {label: 'Europe', id: 'Europe'},
      {label: 'CIS', id: 'CIS'},
      {label: 'America', id: 'America'}
    ]
  })
  const dropdownage = new Dropdown('#dropdown-age', {
    items: [
      {label: '12-15 ??????', id: '12-15'},
      {label: '16-20 ??????', id: '16-20'},
      {label: '21+ ??????', id: '21+'}
    ]
  })
  const dropdownchanel = new Dropdown('#dropdown-chanel', {
    items: [
      {label: 'Discord', id: 'Discord'},
      {label: 'TeamSpeak', id: 'TeamSpeak'},
      {label: 'Telegram', id: 'Telegram'},
      {label: '????????????/????????????????????', id: 'other'}
    ]
  })
  const dropdownaim = new Dropdown('#dropdown-aim', {
    items: [
      {label: '????????????????????', id: 'fun'},
      {label: '????????????????', id: 'up'},
      {label: '???????????????????? ??????????????', id: 'questes'}
    ]
  })
  const dropdownskill = new Dropdown('#dropdown-skill', {
    items: [
      {label: '??????????????', id: 'low'},
      {label: '??????????????', id: 'mid'},
      {label: '??????????????', id: 'high'}
    ]
  })
  
  // window.addEventListener('click', e =>{
  //   if(e.target !== dropdown){
  //     dropdown.close();
  //   }
  // })
