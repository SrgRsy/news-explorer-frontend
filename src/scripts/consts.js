export {saveCardCategory,popupSignUpButtonMobile,viewMoreButton,savedArticleCountHeader,articleCardListSaved,popupSignupSuccessContainer,popupSignUpError,popupSignupSuccessLink,popupSignupSuccessClose,errorMessageNameSignup,errorMessageFalse, errorMessageEmailSignupMobile, errorMessagePassSignupMobile, errorMessageNameSignupMobile, errorMessage, errorMessageSearch, errorMessageSignup, errorMessagePass, errorMessagePassMobile, errorMessageEmailMobile, errorMessagePassSignup, mobilePopupSignUp, popupSigInButtonMobile, popupSigUpButtonMobile, mobilePopupSignInButton, mobilePopupSignUpButton, mobileSignInContainer, mobileSignInButton, mobileMenuButton, mobileMenuCloseButton, mobileMenuContainer, popupSignUpClose, popupSignUpButton, logoutButton, popupLinkButton, popupAuthButton, noResults, results, formSigninMobile, formSigninMobileEmail, formSignupMobileName, formSignupMobileEmail, formSigninMobilePass, popupClose, searchFieldForm, searchFieldInput, popupSignUpContainerMobile, notloggedInContainer, formSignupName, formSigninEmail, popupSignUpContainer, popupSigUpButton, formSignupPass, formSignupEmail, formSignup, formSignupMobile, formSignupMobilePass, popupSigInButton, loggedInContainer, formSignin, formSigninPass, popupSignupContainer, articleCardList, popupContainer, RegExpEmail, RegExpName, valid };

const saveCardCategory = document.querySelector('.saved__key-words-bold');
const savedArticleCountHeader = document.querySelector('.saved__articles-amount-header');
const popupSignupSuccessContainer = document.querySelector('.popup-signup-success');
const popupSignupSuccessClose = popupSignupSuccessContainer.querySelector('.popup__close');
const popupSignupSuccessLink = popupSignupSuccessContainer.querySelector('.popup__login-link');
const notloggedInContainer = document.querySelector('.header__not-logged-in');
const popupContainer = document.querySelector('.popup');
const popupAuthButton = document.querySelector('.header__auth-button');
const popupClose = popupContainer.querySelector('.popup__close');
const popupSignupContainer = document.querySelector('.popup-signup');
const popupSignUpContainerMobile = document.querySelector('.popup__mobile-signup');
const popupSignUpButtonMobile = popupSignUpContainerMobile.querySelector('.popup__button-signup_mobile');
const loggedInContainer = document.querySelector('.header__logged-in');
const popupSignUpContainer = document.querySelector('.popup-signup');
const popupSignUpError = popupSignUpContainer.querySelector('.error-message-signup');
const popupLinkButton = popupSignUpContainer.querySelector('.popup__login-signin');
const articleCardList = document.querySelector('.cards__card-list');
const articleCardListSaved = document.querySelector('.cards__card-list-saved');
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
const errorMessageFalse = popupContainer.querySelector('.error-message-false');
const errorMessagePassMobile = mobileSignInContainer.querySelector('.error-message-mobile-pass');
const errorMessageEmailMobile = mobileSignInContainer.querySelector('.error-message-mobile-email');
const errorMessagePassSignup = popupSignUpContainer.querySelector('.error-message-pass');
const errorMessageNameSignup = popupSignUpContainer.querySelector('.error-message-name');
const errorMessageEmailSignupMobile = popupSignUpContainerMobile.querySelector('.error-message');
const errorMessagePassSignupMobile = popupSignUpContainerMobile.querySelector('.error-message-pass');
const errorMessageNameSignupMobile = popupSignUpContainerMobile.querySelector('.error-message-name');
const viewMoreButton = document.querySelector('.header__auth-button_view-more');



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





