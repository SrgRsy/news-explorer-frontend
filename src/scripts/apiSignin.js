import { errorMessageFalse } from './consts.js';
export default class ApiSignin {
    constructor(mail, pass) {
        this.mail = mail;
        this.pass = pass;

        this.signIn(mail, pass)
    }
    signIn(mail, pass) {
        fetch('https://mesto-testo.site/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: mail.value,
                password: pass.value
            })
        })
            .then(res => res.json())
            .catch((err) => res.status(statusCode).send({ message: err.message }))
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', `Bearer ${data.token}`);
                    location="../index.html";
                } else {
                    errorMessageFalse.textContent = "Неверные учетные данные";
                    errorMessageFalse.classList.add('error-message-active');
                }

            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    };

};













