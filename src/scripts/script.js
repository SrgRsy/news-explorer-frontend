
import '../pages/index.css';
import Api from './api.js';
import Popup from './popup.js';
import Validation from './validation.js';
import {formSigninMobile,results,formSignupMobileName,formSignupMobileEmail,formSigninMobileEmail,formSigninMobilePass,searchFieldForm,searchFieldInput,popupClose,popupSignUpContainerMobile,notloggedInContainer,formSignupName,popupSigUpButton,popupSignUpContainer,formSignupPass,formSignupMobile,formSignupEmail,formSignupMobilePass,popupSignupContainer,popupContainer,loggedInContainer,formSigninEmail,popupSigInButton,formSigninPass} from './consts.js';


// localStorage.setItem("name","Вася");
console.log(localStorage.getItem("name"));


const popupAuthButton = document.querySelector('.header__auth-button');
const logoutButton = loggedInContainer.querySelector('.header__auth-button');
const popupSignUpButton = popupContainer.querySelector('.popup__login-link');

const popupSignUpClose = popupSignupContainer.querySelector('.popup__close');
const mobileMenuContainer = document.querySelector('.header__mobile-main-not-logged-in');
const mobileMenuButton = document.querySelector('.header__auth-button-moblie');
const mobileMenuCloseButton = mobileMenuContainer.querySelector('.header__auth-button-moblie_main');
const mobileSignInContainer = document.querySelector('.popup__mobile');
const mobileSignInButton = mobileMenuContainer.querySelector('.header__auth-button');
const mobilePopupSignUpButton = mobileSignInContainer.querySelector('.popup__login-link');
const mobilePopupSignUp = document.querySelector('.popup__mobile-signup');
const mobilePopupSignInButton = mobilePopupSignUp.querySelector('.popup__login-link');
const popupSigUpButtonMobile = mobilePopupSignUp.querySelector('.popup__button');
const popupSigInButtonMobile = mobileSignInContainer.querySelector('.popup__button');


const errorMessage = popupContainer.querySelector('.error-message');
const errorMessageSearch = document.querySelector('.error-message-search');
const errorMessageSignup = popupSignUpContainer.querySelector('.error-message');
const errorMessagePass = popupContainer.querySelector('.error-message-pass');
const errorMessagePassMobile = mobileSignInContainer.querySelector('.error-message-mobile-pass');
const errorMessageEmailMobile = mobileSignInContainer.querySelector('.error-message-mobile-email');
const errorMessagePassSignup = popupSignUpContainer.querySelector('.error-message-pass');
const errorMessageNameSignup = popupSignUpContainer.querySelector('.error-message-name');
const errorMessageEmailSignupMobile = popupSignUpContainerMobile.querySelector('.error-message');
const errorMessagePassSignupMobile = popupSignUpContainerMobile.querySelector('.error-message-pass');
const errorMessageNameSignupMobile = popupSignUpContainerMobile.querySelector('.error-message-name');




const mobileSignInPopup = new Popup(mobileSignInContainer, popupSignUpClose, mobileSignInButton);
const signupPopup = new Popup(popupSignupContainer, popupSignUpClose, popupSignUpButton);
const authPopup = new Popup(popupContainer, popupClose, popupAuthButton);
const monileMenuPopup = new Popup(mobileMenuContainer, mobileMenuCloseButton, mobileMenuButton);
const validation = new Validation();


window.onload = function () {
    document.querySelector('.preloader').classList.add('popup_is-opened');
    window.setTimeout(function () {
        document.querySelector('.preloader').classList.remove('popup_is-opened');
    }, 500);
}


if (localStorage.getItem("token")) {
    loggedInContainer.classList.add('popup_is-opened');
    loggedInContainer.querySelector('.header__auth-button-name').textContent = localStorage.getItem("token");
} else if (!localStorage.getItem("token")) {
    notloggedInContainer.classList.add('popup_is-opened');
};


//Работа с Апи, отрисовка карточек
searchFieldForm.addEventListener('submit', function (event) {
    if (!searchFieldInput.value) {
        validation.checkField(searchFieldInput, errorMessageSearch);
        event.preventDefault();
    } else {
        results.classList.add('popup_is-opened');
        new Api(searchFieldForm.elements.searchField.value);
        event.preventDefault();
    }
});
//Открытие/закрытие Popup 

popupSignUpButton.addEventListener('click', function () {
    popupContainer.classList.remove('popup_is-opened')
});
mobileMenuButton.addEventListener('click', function () {
    mobileMenuContainer.querySelector('.header__main-button').classList.add('popup_is-opened');
    mobileMenuContainer.querySelector('.header__auth-button').classList.add('popup_is-opened');
});
mobileSignInButton.addEventListener('click', function () {
    mobileMenuContainer.classList.remove('popup_is-opened');
});
mobilePopupSignUpButton.addEventListener('click', function () {
    mobilePopupSignUp.classList.add('popup_is-opened');
    mobileSignInContainer.classList.remove('popup_is-opened');
});
mobilePopupSignInButton.addEventListener('click', function () {
    mobilePopupSignUp.classList.remove('popup_is-opened');
    mobileSignInContainer.classList.add('popup_is-opened');
});

//Валидация поля поиска статей
searchFieldInput.addEventListener('input', function () {
    validation.checkField(searchFieldInput, errorMessageSearch);
});

//Валидация входа основного Popup
formSigninEmail.addEventListener('input', function () {
    validation.checkValidity(formSigninEmail, errorMessage);
});
formSigninPass.addEventListener('input', function () {
    validation.checkLength(formSigninPass, errorMessagePass);
});


//Валидация регистрации основного Popup
formSignupEmail.addEventListener('input', function () {
    validation.checkValidity(formSignupEmail, errorMessageSignup);
});
formSignupPass.addEventListener('input', function () {
    validation.checkLength(formSignupPass, errorMessagePassSignup);
});
formSignupName.addEventListener('input', function () {
    validation.checkName(formSignupName, errorMessageNameSignup);
});


//Валидация входа мобильного Popup
formSigninMobileEmail.addEventListener('input', function () {
    validation.checkValidity(formSigninMobileEmail, errorMessageEmailMobile);
});
formSigninMobilePass.addEventListener('input', function () {
    validation.checkLength(formSigninMobilePass, errorMessagePassMobile);
});
formSigninMobile.addEventListener('input', function () {
    if (RegExpEmail.test(formSigninMobileEmail.value) && formSigninMobilePass.value.length >= 8) {
        popupSigInButtonMobile.removeAttribute('disabled', true);
        popupSigInButtonMobile.classList.remove('input__btn_disabled');
    } else {
        popupSigInButtonMobile.setAttribute('disabled', true);
        popupSigInButtonMobile.classList.add('input__btn_disabled');
    }
});

//Валидация регистрации мобильного Popup
formSignupMobileEmail.addEventListener('input', function () {
    validation.checkValidity(formSignupMobileEmail, errorMessageEmailSignupMobile);
});
formSignupMobilePass.addEventListener('input', function () {
    validation.checkLength(formSignupMobilePass, errorMessagePassSignupMobile);
});
formSignupMobileName.addEventListener('input', function () {
    validation.checkName(formSignupMobileName, errorMessageNameSignupMobile);
});
formSignupMobile.addEventListener('input', function () {
    if (RegExpEmail.test(formSignupMobileEmail.value) && formSignupMobilePass.value.length >= 8 && RegExpName.test(formSignupMobileName.value)) {
        popupSigUpButtonMobile.removeAttribute('disabled', true);
        popupSigUpButtonMobile.classList.remove('input__btn_disabled');
    } else {
        popupSigUpButtonMobile.setAttribute('disabled', true);
        popupSigUpButtonMobile.classList.add('input__btn_disabled');
    }
});
popupSigUpButton.addEventListener('submit', function () {
    fetch('https://mesto-testo.site//signup', {
        method: 'POST',
        body: JSON.stringify({
            email: formSignupEmail.value,
            password: formSignupPass.value,
            name:formSignupName.value
        })
    })
        .then(res => res.json())
        .then((data) => {
            // сохраняем токен
            console.log("Зарегистрирован");
            // localStorage.setItem('token', data.token);
        });
});
popupSigInButton.addEventListener('submit', function () {
    fetch('https://mesto-testo.site//signin', {
        method: 'POST',
        body: JSON.stringify({
            email: formSigninEmail.value,
            password: formSignupPass.value
        })
    })
        .then(res => res.json())
        .then((data) => {
            // сохраняем токен
            console.log(mailInput.value);
            localStorage.setItem('token', data.token);
        });
});
popupSigInButtonMobile.addEventListener('submit', function () {
    fetch('https://mesto-testo.site//signin', {
        method: 'POST',
        body: JSON.stringify({
            email: formSformSigninMobileEmailigninEmail.value,
            password: formSigninMobilePass.value
        })
    })
        .then(res => res.json())
        .then((data) => {
            // сохраняем токен
            console.log(mailInput.value);
            localStorage.setItem('token', data.token);
        });
});

logoutButton.addEventListener('click', function () {
    console.log('Работает');
    localStorage.removeItem("name");
    location.reload(true)

});