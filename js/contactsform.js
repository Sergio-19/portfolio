let form = document.getElementById('form-block')
let inputName = document.getElementById('form-name')
let inputEmail = document.getElementById('form-email')
let formMessage = document.getElementById('form-message')
let messageText = document.getElementById('message-text')
let mask = document.querySelector('#mask')
let modal = document.querySelector('.window__message')

let btnContainer = document.querySelector('#btn-container')



let $span = `<span class="section__contacts-form-btn" id = 'span-btn'>Отправить сообщение</span>`

btnContainer.insertAdjacentHTML('afterbegin', $span)

function showPopup() {
    modal.classList.toggle('window__message-show')
    mask.classList.toggle('popup__mask-show')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function inputHandler({target}) {
    if(target.name === 'name') {
        if(inputValidator(target.name, target.value)){
            target.style.border = '1px solid #1EEB53'
            target.dataset.valid = true
        } else { target.style.border = '1px solid #FF0808'
                 target.dataset.valid = false
                }
    }

    if(target.name === 'email') {
        if(inputValidator(target.name, target.value)){
            target.style.border = '1px solid #1EEB53'
            target.dataset.valid = true
        } else { target.style.border = '1px solid #FF0808'
                 target.dataset.valid = false
                }
    }

    if(target.name === 'message') {
        if(inputValidator(target.name, target.value)){
            target.style.border = '1px solid #1EEB53'
            target.dataset.valid = true
        } else { target.style.border = '1px solid #FF0808'
                 target.dataset.valid = false
                }
    }

    if(inputName.dataset.valid === 'true' && inputEmail.dataset.valid === 'true' && formMessage.dataset.valid === 'true') {
        if(document.querySelector('#span-btn')) {
            document.querySelector('#span-btn').remove()
            btnContainer.insertAdjacentHTML('afterbegin', `<button id="formbtn" class="section__contacts-form-btn section__contacts-form-btn-active" >Отправить сообщение</button>`)
            let $btn = document.getElementById('formbtn')
            $btn.addEventListener('click', (event)=> postFormHandler(event))
        } 
        
    }
}

async function postFormHandler(event) {
    event.preventDefault()
    if(inputValidator('name', inputName.value) && inputValidator('email', inputEmail.value) && inputValidator('message', formMessage.value)){
        let order = {
            name: inputName.value,
            email: inputEmail.value,
            message: formMessage.value
        }
        
        const response = await axios.post('https://sergio19.store/mailer/mail', {order})
        console.log(response)
        messageText.innerHTML = 'Ваше сообщение успешно отправлено!'
        showPopup()
       await setTimeout(()=> {
            showPopup()
            inputName.value = '';
            inputEmail.value = '';
            formMessage.value = '';
            window.location.href = '/'
        }, 1000)
        
    } else {
        messageText.innerHTML = 'Сообщение не отправлено! Проверьте заполнение полей!' 
        showPopup()
       await setTimeout(()=> {
        showPopup()   
        }, 2000)
    }
    
  }

function inputValidator(name, val) {
    let valid = false
    if(name === 'name') {
        val.length > 3 ? valid = true : valid = false
    }
    if(name === 'email') {
        validateEmail(val) ? valid = true : valid = false
    }
    if(name === 'message') {
        val !== '' ? valid = true : valid = false
    }
    return valid
}

  form.addEventListener('input', inputHandler)