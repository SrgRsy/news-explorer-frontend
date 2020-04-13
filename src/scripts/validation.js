import {popupSigUpButton,formSignup,formSignupName,formSigninPass,formSignupEmail,formSignupPass,RegExpEmail,RegExpName,valid,formSignin,formSigninEmail,formSignupMobilePass,popupSigInButton } from './consts.js';
export default class Validation {
    constructor() {
    }

    checkValidity(cont, error) {
        if (!RegExpEmail.test(cont.value)) {
            error.textContent = valid.notEmail;
            error.classList.add('error-message-active');
        } else {
            error.classList.remove('error-message-active');
        }
    }
    checkLength(cont, error) {
        if (cont.value.length < 8) {
            error.textContent = valid.shortPass;
            error.classList.add('error-message-active');
        } else {
            error.classList.remove('error-message-active');
        }
    }
    checkField(cont, error) {
        if (cont.value.length < 1) {
            error.classList.add('error-message-active');
        } else {
            error.classList.remove('error-message-active');
        }
    }
    checkName(cont, error) {
        if (!RegExpName.test(cont.value)) {
            error.textContent = valid.wrongName;
            error.classList.add('error-message-active');
        } else {
            error.classList.remove('error-message-active');
        }
    }


}

formSignin.addEventListener('input', function () {
    if (RegExpEmail.test(formSigninEmail.value) && formSigninPass.value.length >= 8) {
        popupSigInButton.removeAttribute('disabled', true);
        popupSigInButton.classList.remove('input__btn_disabled');
    } else {
        popupSigInButton.setAttribute('disabled', true);
        popupSigInButton.classList.add('input__btn_disabled');
    }
});

formSignup.addEventListener('input', function () {
    if (RegExpEmail.test(formSignupEmail.value) && formSignupPass.value.length >= 8 && RegExpName.test(formSignupName.value)) {
        popupSigUpButton.removeAttribute('disabled', true);
        popupSigUpButton.classList.remove('input__btn_disabled');
    } else {
        popupSigUpButton.setAttribute('disabled', true);
        popupSigUpButton.classList.add('input__btn_disabled');
    }
});
