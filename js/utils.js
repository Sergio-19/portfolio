

let linkElem = document.getElementById('phone-link')
let linkBtn = document.getElementById('phone-link-btn')

linkElem.innerHTML = '+7 ***-***-**-**'
linkBtn.innerHTML = 'Показать телефон'



function showPhoneHandler() {
    linkElem.innerHTML = '+7 921 090-02-18'
    linkBtn.innerHTML = 'Скрыть телефон'
    linkBtn.removeEventListener('click', showPhoneHandler)
    linkBtn.addEventListener('click', hidePhoneHandler)
}

function hidePhoneHandler() {
    linkElem.innerHTML = '+7 ***-***-**-**'
    linkBtn.innerHTML = 'Показать телефон'
    linkBtn.removeEventListener('click', hidePhoneHandler)
    linkBtn.addEventListener('click', showPhoneHandler)

}

linkBtn.addEventListener('click', ()=> showPhoneHandler())