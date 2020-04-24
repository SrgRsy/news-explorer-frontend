import { errorMessageFalse } from '../const/consts.js';
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
                    this.myData();
                    location="../index.html";
                } else {
                    errorMessageFalse.textContent = "Неверные учетные данные";
                    errorMessageFalse.classList.add('error-message-active');
                }

            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    };
    myData() {
        fetch('https://mesto-testo.site/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                localStorage.setItem('id', data._id);
                localStorage.setItem('name', data.name);

            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    };

};













