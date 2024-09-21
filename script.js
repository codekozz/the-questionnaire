const form = document.querySelector(".form");
const sendButton = document.querySelector(".send-btn");

const nameUser = document.querySelector('#name')
const secondNameUser = document.querySelector('#secondName')
const emailUser = document.querySelector('#email')
const phoneUser = document.querySelector('#phone')
const agreeCheck = document.querySelector('#agree')

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();
    console.log('Данные отправлены')

    fetch(`https://polinashneider.space/user`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: codekozz'
            },
            body: JSON.stringify({
                "name": nameUser.value,
                "secondName": secondNameUser.value,
                "phone": phoneUser.value,
                "email": emailUser.value,
                "agree": true
            }),

        })
        .then((result) => result.json())
        .then((data) => console.log(data))

});