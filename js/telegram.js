
const telegram = document.getElementById('telegram-block')
const fly = document.getElementById('telegram-fly')

const mainBlock = document.querySelector('.section__main')
const aboutBlock = document.querySelector('.section__about')
const projectsBlock = document.querySelector('.section__projects')
const skillsBlock = document.querySelector('.section__skills')
const contactsBlock = document.querySelector('.section__contacts')


const headerElem = document.querySelector('header')
const arrow = document.querySelector('.top__control')


// const mainLink = document.getElementById('.mainlink-js')
// const aboutLink = document.getElementById('.aboutlink-js')
// const skillsLink = document.getElementById('.askillslink-js')
// const projectsLink = document.getElementById('.projectslink-js')
// const contactsLink = document.getElementById('.contactslink-js')

let links = {
    main: {elem: document.getElementById('mainlink-js'), path: 'main', to: mainBlock},
    about: {elem: document.getElementById('aboutlink-js'), path: 'about', to: aboutBlock},
    skills: {elem: document.getElementById('skillslink-js'), path: 'skills', to: skillsBlock},
    projects: {elem: document.getElementById('projectslink-js'), path: 'projects', to: projectsBlock},
    contacts: {elem: document.getElementById('contactslink-js'), path: 'contacts', to: contactsBlock}
}

function flyAction() {
    fly.classList.toggle('telegram-show')
    telegram.classList.toggle('telegram-show')
    setTimeout(()=> {
        telegram.classList.toggle('telegram-show')
    }, 300)
    setTimeout(()=> {
        fly.classList.toggle('telegram-show')
    }, 400)
   
}

function goTelegram() {
    window.open("https://t.me/sergio19spb")
}

telegram.addEventListener('click', goTelegram)



arrow.addEventListener('click', ()=> {
    mainBlock.scrollIntoView({behavior: "smooth"})
    Object.keys(links).forEach((el)=> {
        links[el].elem.classList.remove('active')
    })
})

function headerAction() {
    window.pageYOffset > aboutBlock.offsetTop && window.screen.width > 768 ? headerElem.classList.add('header__white') : headerElem.classList.remove('header__white')
    window.pageYOffset >= aboutBlock.offsetTop - 10 ? arrow.classList.add('top__control-show') : arrow.classList.remove('top__control-show')
}


setInterval(()=> {
    flyAction()
}, 2000)

window.addEventListener('scroll', headerAction)

function smoothScroll(event, block) {
    let path = event.target.dataset.path
    block.scrollIntoView({behavior: "smooth"})
    Object.keys(links).forEach((el)=> {
        if(links[el].path !== path){
            links[el].elem.classList.remove('active')
        } else {
            links[el].elem.classList.add('active') 
        }
    })
    // link.classList.add('active')
}


//функция добавления обработчиков ссылкам для скролла
function addScrollFunc() {

    Object.keys(links).forEach((el)=> {
        links[el].elem.addEventListener('click', (event)=> smoothScroll(event, links[el].to))
    })
}

addScrollFunc()
