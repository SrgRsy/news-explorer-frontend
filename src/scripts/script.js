
import '../pages/index.css';

import NewsApi from './api/newsApi.js';
import Popup from './popup/popup.js';
import Validation from './valid/validation.js';
import {mainApi, viewMoreButton, popupSignUpButtonMobile, RegExpEmail, errorMessageNameSignup, errorMessageEmailSignupMobile, errorMessagePassSignupMobile, errorMessageNameSignupMobile, errorMessage, errorMessageSearch, errorMessageSignup, errorMessagePass, errorMessagePassMobile, errorMessageEmailMobile, errorMessagePassSignup, mobilePopupSignUpButton, mobilePopupSignUp, popupSigInButtonMobile, mobilePopupSignInButton, popupSigUpButtonMobile, mobileSignInContainer, mobileSignInButton, mobileMenuButton, mobileMenuCloseButton, mobileMenuContainer, popupSignUpClose, popupSignUpButton, logoutButton, popupLinkButton, formSigninMobile, results, formSignupMobileName, formSignupMobileEmail, formSigninMobileEmail, popupAuthButton, formSigninMobilePass, searchFieldForm, searchFieldInput, popupClose, popupSignUpContainerMobile, notloggedInContainer, formSignupName, popupSigUpButton, popupSignUpContainer, formSignupPass, formSignupMobile, formSignupEmail, formSignupMobilePass, popupSignupContainer, popupContainer, loggedInContainer, formSigninEmail, popupSigInButton, formSigninPass } from './const/consts.js';


//Открытие/закрытие Popup 
popupLinkButton.addEventListener('click', function () {
    popupSignupContainer.classList.remove('popup_is-opened');
    popupContainer.classList.add('popup_is-opened');
});
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


new Popup(mobileSignInContainer, popupSignUpClose, mobileSignInButton);
new Popup(popupSignupContainer, popupSignUpClose, popupSignUpButton);
new Popup(popupContainer, popupClose, popupAuthButton);
new Popup(mobileMenuContainer, mobileMenuCloseButton, mobileMenuButton);
const validation = new Validation();


//прелоудер
window.onload = function () {
    window.setTimeout(function () {
        document.querySelector('.preloader').classList.remove('popup_is-opened');
    }, 4000);
}


if (localStorage.getItem("token")) {
    loggedInContainer.classList.add('popup_is-opened');
    mainApi.savedArticles();
    loggedInContainer.querySelector('.header__auth-button-name').textContent = localStorage.getItem('name');
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
        new NewsApi(searchFieldForm.elements.searchField.value);
        event.preventDefault();
    }
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



popupSigUpButton.addEventListener('click', function (event) {
    mainApi.signUp(formSignupEmail, formSignupPass, formSignupName);
    event.preventDefault();
});

popupSignUpButtonMobile.addEventListener('click', function (event) {
    mainApi.signUp(formSignupMobileEmail, formSignupMobilePass, formSignupMobileName);
    event.preventDefault();
});

popupSigInButton.addEventListener('click', function (event) {
    mainApi.signIn(formSigninEmail,formSigninPass);
    event.preventDefault();
});

popupSigInButtonMobile.addEventListener('click', function (event) {
    mainApi.signIn(formSigninMobileEmail, formSigninMobilePass);
    event.preventDefault();
});


logoutButton.addEventListener('click', function () {
    localStorage.clear();
    location="../index.html";
});

viewMoreButton.addEventListener('click', function () {
    let i = 3;
    let b = 3;
    let c = 3;
    const cardArr = document.querySelectorAll('.cards__article-card');
    b = cardArr.length - document.querySelector('.cards__card-list').querySelectorAll('.none').length;
    for (i; i < b + c; i++) {
        cardArr[i].classList.remove('none');
    }
    if (document.querySelector('.cards__card-list').querySelectorAll('.none').length <= 2) {
        viewMoreButton.classList.add('none');
    }
});



