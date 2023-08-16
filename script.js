const email = document.querySelector('.input__email')
const password = document.getElementById('input__password')
const password2 = document.getElementById('input__password2')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')


btn.addEventListener('click', () => {
    if (email.value.indexOf('@') != -1 && password.value === '12345678' && password.value === password2.value && password.value.length >= 8) {
        result.innerHTML = 'Форма отправлена'
        result.classList.add('green')
    } else if (!(email.value.indexOf('@') != -1)) {
        result.innerHTML = 'Нет @'
        result.classList.add('red')
    } else if (!(password.value === '12345678')) {
        result.innerHTML = 'Неверный пароль'
        result.classList.add('red')
    } else if (!(password.value === password2.value)) {
        result.innerHTML = 'Пароли не совпадают'
        result.classList.add('red')
    } else if (!(password.value.length >= 8)) {
        result.innerHTML = 'Пароль короче 8 символов'
        result.classList.add('red')
    }
})
