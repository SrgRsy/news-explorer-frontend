import { popupSignupSuccessContainer,popupSignUpError, popupContainer, popupSignupSuccessLink, popupSignupContainer, popupSignupSuccessClose } from './consts.js';
export default class ApiSignup {
    constructor(mail, pass, name) {
        this.mail = mail;
        this.pass = pass;
        this.name = name;

        this.signUp(mail, pass, name);
    }
    signUp(mail, pass, name) {
        fetch('https://mesto-testo.site/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: mail.value,
                password: pass.value,
                name: name.value
            })
        })
            .then(res => res.json())
            .then((res) => {
                if (res.ok) {
                    popupSignupSuccessContainer.classList.add('popup_is-opened');
                    popupSignupContainer.classList.remove('popup_is-opened');

                    popupSignupSuccessClose.addEventListener('click', function () {
                        popupSignupSuccessContainer.classList.remove('popup_is-opened');
                    });

                    popupSignupSuccessLink.addEventListener('click', function () {
                        popupSignupSuccessContainer.classList.remove('popup_is-opened');
                        popupContainer.classList.add('popup_is-opened');
                    });
                } else {
                    popupSignUpError.classList.add('error-message-active');
                }
            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    }
};
