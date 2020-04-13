export {noResults,results,formSigninMobile,formSigninMobileEmail,formSignupMobileName,formSignupMobileEmail,formSigninMobilePass,popupClose,searchFieldForm,searchFieldInput,popupSignUpContainerMobile,notloggedInContainer,formSignupName,formSigninEmail,popupSignUpContainer,popupSigUpButton,formSignupPass,formSignupEmail,formSignup,formSignupMobile,formSignupMobilePass,popupSigInButton,loggedInContainer,formSignin,formSigninPass,popupSignupContainer,articleCardList,popupContainer,RegExpEmail,RegExpName,valid};
const notloggedInContainer = document.querySelector('.header__not-logged-in');
const popupContainer = document.querySelector('.popup');
const popupAuthButton = document.querySelector('.header__auth-button');

const popupClose = popupContainer.querySelector('.popup__close');

const popupSignUpContainerMobile = document.querySelector('.popup__mobile-signup');
const loggedInContainer = document.querySelector('.header__logged-in');
const popupSignUpContainer = document.querySelector('.popup-signup');

const popupSignupContainer = document.querySelector('.popup-signup');
const articleCardList = document.querySelector('.cards__card-list');
const formSignin = document.forms.signin;
const formSignup = document.forms.signup;
const formSignupEmail = formSignup.elements.emailSignup;
const formSigninEmail = formSignin.elements.emailSignin;
const formSignupPass = formSignup.elements.passwordSignup;
const popupSigInButton = popupContainer.querySelector('.popup__button');
const formSigninPass = formSignin.elements.passwordSignin;
const formSignupMobile = document.forms.signupMobile;
const formSignupMobilePass = formSignupMobile.elements.password;
const popupSigUpButton = popupSignUpContainer.querySelector('.popup__button');
const noResults = document.querySelector('.no-results');
const results = document.querySelector('.results');


const formSignupName = formSignup.elements.userSignup;
const searchFieldForm = document.forms.search;
const searchFieldInput = searchFieldForm.elements.searchField;
const formSigninMobile = document.forms.signinMobile;
const formSigninMobilePass = formSigninMobile.elements.password;
const formSignupMobileEmail = formSignupMobile.elements.email;
const formSignupMobileName = formSignupMobile.elements.userSignup;
const formSigninMobileEmail = formSigninMobile.elements.email;








const RegExpEmail = /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i;
const RegExpName = /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?$/;
const valid = {
    shortPass: 'Должно быть от 8 до 30 символов',
    notEmail: 'Почта указана неверно',
    wrongName: 'Перввый символ должен быть прописной.'
};