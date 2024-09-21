const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();


});

const nameUser = document.querySelector('#name')
const secondNameUser = document.querySelector('#secondName')
const emailUser = document.querySelector('#email')
const phoneUser = document.querySelector('#phone')
const agreeCheck = document.querySelector('#agree')

async function preventDefault() {
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
            "agree": function check() {
                return document.getElementById("myCheck").checked
            }
        }),
    })
}