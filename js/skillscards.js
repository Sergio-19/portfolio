
let skillsInfo = {
    css: {
          name: 'CSS',
          img: 'css.png',
          black: 'cssblack.png',
          id: '00001'   
         },
    figma: {
            name: 'Figma',
            img: 'figma.png',
            black: 'figmablack.png',
            id: '00002'
            },
 firebase: {
            name: 'Firebase',
            img: 'firebase.png',
            black: 'firebaseblack.png',
            id: '00003'
           },
    html: {
            name: 'HTML',
            img: 'html.png',
            black: 'htmlblack.png',
            id: '00004'
           },
       js: { 
             name: 'Javascript',
             img: 'js.png',
             black: 'jsblack.png',
             id: '00005'
           },
    mongo: {
             name: 'MongoDB',
             img: 'mongo.png',
             black: 'mongoblack.png',
             id: '00006'
             },
    mysql: {
            name: 'MySQL',
            img: 'mysql.png',
            black: 'mysqlblack.png',
            id: '00007'
             },
photoshop: {
            name: 'Photoshop',
            img: 'photoshop.png',
            black: 'photoshopblack.png',
            id: '00008'
            },
postgresql: {
            name: 'PostgreSQL',
            img: 'postgresql.png',
            black: 'postgresqlblack.png',
            id: '00009'
            },
    react: {
            name: 'React',
            img: 'react.png',
            black: 'reactblack.png',
            id: '000010'
            },
     redux: {
             name: 'Redux',
             img: 'redux.png',
             black: 'reduxblack.png',
             id: '000011'
            },
      sass: {
            name: 'Sass',
            img: 'sass.png',
            black: 'sassblack.png',
            id: '000012'
            },
    //    style: {
    //         name: 'Styled Components',
    //         img: 'style.png',
    //         black: 'styleblack.png',
    //         id: '000013'
    //           },
  typescript: {
            name: 'Typescript',
            img: 'typescript.png',
            black: 'typescriptblack.png',
            id: '000014'
             },
     webpack: {
             name: 'Webpack',
             img: 'webpack.png',
             black: 'webpackblack.png',
             id: '000015'   
     },
     node: {
            name: 'Node JS',
            img: 'node.png',
            black: 'nodeblack.png',
            id: '000016'
            },
      nest: {
            name: 'Nest JS',
            img: 'nest.png',
            black: 'nestblack.png',
            id: '000017'
      }                                                                                                
}


let skillsContainer = document.getElementById('skills-js') // Контейнер куда складываем карточки технологий

function getTemplate() {
    let template = ``
    Object.keys(skillsInfo).forEach((el)=> {
        const {name, black, id} = skillsInfo[el]
        template += `<div class="section__skills-item" data-id = ${id} data-key = ${el}>
                        <div class="section__skills-overlay" data-id = ${id}></div>
                        <div class="section__skills-item-img">
                            <img src="./images/${black}" alt = ${name} id = 'img-${id}'/>
                        </div>
                        <div class="section__skills-item-text">
                            <span>${name}</span>
                        </div>
                    </div>`
    })

    return template
}


function renderSkillsCards() {
    skillsContainer.insertAdjacentHTML('beforeend', getTemplate())
}

renderSkillsCards()

let skillsItems = document.querySelectorAll('.section__skills-item')
let skillsOverlay = document.querySelectorAll('.section__skills-overlay')

skillsItems.forEach((el)=> {
    el.addEventListener('mouseout', changeImage)
    el.addEventListener('mouseover', changeImage)
})
let flag = true
function changeImage() {
    
    skillsOverlay.forEach((el)=> {
        if(el.dataset.id === this.dataset.id) {
            let color = `./images/${skillsInfo[this.dataset.key].img}`
            let notColor = `./images/${skillsInfo[this.dataset.key].black}`
            let img = document.querySelector(`#img-${this.dataset.id}`)
            el.classList.toggle('section__skills-overlay-show')
            el.classList.toggle('section__skills-overlay-show2')
            img.src = flag ? color : notColor
            flag = !flag
        } 
    })
}

function changeImageAuto() {
    
}

