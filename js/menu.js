let headOverlay = document.getElementById('mask')
let popup = document.getElementById('popup')
let burger = document.getElementById('burger')
let times = document.getElementById('times')

function showMenu() {
    popup.classList.toggle('popup__wrap-show')
    headOverlay.classList.toggle('popup__mask-show')
    burger.classList.toggle('burger-hidden')
}

burger.addEventListener('click', showMenu)
times.addEventListener('click', showMenu)

let adaptiveLinks = {
    main: {elem: document.getElementById('mainlink-js-adaptive'), path: 'main', to: document.querySelector('.section__main')},
    about: {elem: document.getElementById('aboutlink-js-adaptive'), path: 'about', to: document.querySelector('.section__about')},
    skills: {elem: document.getElementById('skillslink-js-adaptive'), path: 'skills', to: document.querySelector('.section__skills')},
    projects: {elem: document.getElementById('projectslink-js-adaptive'), path: 'projects', to: document.querySelector('.section__projects')},
    contacts: {elem: document.getElementById('contactslink-js-adaptive'), path: 'contacts', to: document.querySelector('.section__contacts')}
}

function smoothScrollFunc(block) {
    block.scrollIntoView({behavior: "smooth"}) 
    showMenu() 
}


//функция добавления обработчиков ссылкам для скролла
function addScroll() {

    Object.keys(adaptiveLinks).forEach((el)=> {
        adaptiveLinks[el].elem.addEventListener('click', (event)=> smoothScrollFunc(adaptiveLinks[el].to))
    })
}

addScroll()