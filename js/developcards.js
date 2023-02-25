let cardsInfo = {
    hopastore: {
        name: 'HopaStore', 
        path: 'https://hopastore.ru',
        stack: ['React', 'Next JS', 'Node JS', 'MongoDB', 'Typescript', 'Redux'],
        image: 'hopastore.png', 
        id: '00001',
        description: 'Интернет-магазин оптовых продаж бытовых товаров из Турции. Клиент написан на платформе Next JS + Redux, backend - Express, Система управления БД - Mongo DB.'
    },
    currency: {
        name: 'Currency.com',
        path: 'https://currency.com/',
        stack: ['React', 'Next JS', 'Node JS', 'MySQL'],
        image: 'currency.png',
        id: '00002',
        description: 'Сайт криптовалютной биржи. Принимал участие в качестве Frontend разработчика при создании сайта, а также работал над созданием русскоязычной версии одноимённого сайта. Позже работал над визуальной составляющей личного кабинета пользователя, проект также представлен ниже. Стек технологий: React, Redux, Next JS, Node JS, MySQL.'
    }, 
    asos: {
        name: 'Asos',
        path: 'https://github.com/Sergio-19/clothes-shop',
        stack: ['React', 'Next JS', 'Node JS', 'MongoDB', 'Typescript'],
        image: 'asos.png',
        id: '00003',
        description: 'Сайт по продаже одежды. Писал Rest Api, а также работал над проектированием БД.'
    },
    alpshop: {
        name: 'Vysota shop',
        path: 'https://github.com/Sergio-19/alp_shop',
        stack: ['React', 'Redux', 'Next JS', 'Node JS', 'MySQL'],
        image: 'alpshop.png',
        id: '00004',
        description: 'Магазин по продаже снаряжения для альпинизма. Создавал сайт дважды: первый раз - SSR на Express, шаблонизатор - Pug. Потом сайт был переписан, клиент работает на Next + Redux, backend - также остался Express, БД - MySQL.'
    },
    private: {
        name: 'ByCrypt (Личный кабинет)',
        path: 'https://github.com/Sergio-19/PrivateV2',
        stack: ['React', 'Firebase', 'Typescript', 'Redux'],
        image: 'private.png',
        id: '00005',
        description: 'Личный кабинет пользователя криптовалютной биржи. Проект выполнен на React + Redux + Typescript. Для работы чата использовалась Realtime Database Firebase.'
    },
    zencourse: {
        name: 'ZenCourse (Образовательная площадка)',
        path: 'https://github.com/Sergio-19/rudemy_client',
        stack: ['React', 'Next JS', 'Node JS', 'MySQL'],
        image: 'zencourse.png',
        id: '00006',
        description: 'Площадка для онлайн образования. Я принимал непосредственное участие в разработке сайта, в написании backenda на Express, А также позже разрабатывал панель администратора. Проект не взлетел, сайт сейчас уже не существует, код проекта у меня в github.'
    }

}

const windowWidth = window.screen.width


function getTemplate(count, name, image, stack, key, description) {
    let stackResult = ``
    stack.forEach((el)=> {
        stackResult += ` <div class="section__develop-card-stack-item">
                            <span>${el}</span>
                         </div>`
                         })
    return (
    `<div class="section__content content-${count ? 'left' : 'right'}">
        <div class="section__develop-card site-card-js" data-path = '${key}'>
            <div class="section__develop-card-overlay card-overlay-js" data-path = '${key}'>
                <div class="section__develop-card-overlay-text">
                    <div class="section__develop-card-overlay-text-wrap">
                        <p>${description}</p>
                        <span data-path = '${key}'>Подробнее...</span>
                    </div>
                </div>
            </div>
            <div class="section__develop-card-title">
                <h3>${name}</h3>
            </div>
            <div class="section__develop-card-stack">
                ${stackResult}
            </div>
            <div class="section__develop-card-img">
                <img src = './images/${image}'/>
            </div>
        </div>
    </div>`

)
}

let sectionContainer = document.querySelector('.section__projects-content') //блок куда делаем рендер карточек


function goToSite() {
    if(cardsInfo[this.dataset.path].path){
        window.open(cardsInfo[this.dataset.path].path)
    }
}

function showOverlay() {
    cardsOverlay.forEach((el)=> {
        if(el.dataset.path === this.dataset.path){
           setTimeout(()=> {
            el.classList.toggle('section__develop-card-overlay-show')
           }, 200)
        }
    })
}

function hideOverlay({target}) {
   return target
}


function renderDevelopCards() {
    let count = false
    Object.keys(cardsInfo).forEach((el)=> {
        const {name, stack, image, description} = cardsInfo[el]
        sectionContainer.insertAdjacentHTML('beforeend', getTemplate(count, name, image, stack, el, description))
        count = !count
    })
}

renderDevelopCards()

let developCards = document.querySelectorAll('.site-card-js')
let cardsOverlay = document.querySelectorAll('.card-overlay-js')

developCards.forEach((el)=> {
    if(windowWidth >= 768){
        el.addEventListener('click', goToSite)
        el.addEventListener('mouseover', showOverlay)
        el.addEventListener('mouseout', showOverlay)
    } else {
        el.addEventListener('click', showOverlay)
        let key = el.dataset.path
        let overlay = document.querySelector(`.card-overlay-js[data-path = ${key}]`)
        let $span = document.querySelector(`span[data-path = ${key}]`)
        $span.addEventListener('click', goToSite)
        overlay.addEventListener('click', ({target})=> hideOverlay({target}))
    }
})

