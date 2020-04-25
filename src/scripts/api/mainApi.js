import { searchFieldInput, errorMessageFalse, articleCardListSaved, savedArticleCountHeader, saveCardCategory, popupSignupSuccessContainer, popupSignUpError, popupContainer, popupSignupSuccessLink, popupSignupContainer, popupSignupSuccessClose } from '../const/consts.js';

export default class MainApi {
    constructor() {

    }

    myData() {
        fetch('https://mesto-testo.site/users/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            }
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                localStorage.setItem('id', data._id);
                localStorage.setItem('name', data.name);

            })
            .catch((err) => {
                console.log(err);
            });
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
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('token', `Bearer ${data.token}`);
                    this.myData();
                    location = "../index.html";
                } else {
                    errorMessageFalse.textContent = "Неверные учетные данные";
                    errorMessageFalse.classList.add('error-message-active');
                }

            })
            .catch((err) => {
                console.log(err);
            });
    };

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
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                } else {
                    popupSignupSuccessContainer.classList.add('popup_is-opened');
                    popupSignupContainer.classList.remove('popup_is-opened');

                    popupSignupSuccessClose.addEventListener('click', function () {
                        popupSignupSuccessContainer.classList.remove('popup_is-opened');
                    });

                    popupSignupSuccessLink.addEventListener('click', function () {
                        popupSignupSuccessContainer.classList.remove('popup_is-opened');
                        popupContainer.classList.add('popup_is-opened');
                    });
                }
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            });

    }

    savedArticles() {
        fetch('https://mesto-testo.site/articles', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const keywordArr = []
                data.data.forEach((item) => {
                    if (item.owner == localStorage.getItem('id')) {
                        if (!keywordArr.includes(item.keyword))
                            keywordArr.push(item.keyword);
                    }
                })

                let a = 0;
                data.data.forEach((item) => {
                    if (item.owner == localStorage.getItem('id')) {
                        a++;
                        const articleId = item._id;
                        const articleCard = document.createElement('div');
                        const articleImage = document.createElement('div');
                        const articleCategory = document.createElement('div');
                        const articleImageButton = document.createElement('button');
                        const articleImageButtonUnsave = document.createElement('button');
                        const articleContent = document.createElement('div');
                        const articleContentDate = document.createElement('span');
                        const articleContentHeader = document.createElement('h2');
                        const articleContentText = document.createElement('p');
                        const articleContentSource = document.createElement('a');

                        articleCard.classList.add('cards__article-card');
                        articleImage.classList.add('cards__article-image');
                        articleCategory.classList.add('cards__article-category');
                        articleCategory.classList.add('button__effect');
                        articleImageButtonUnsave.classList.add('cards__article-button-unsave');
                        articleContent.classList.add('cards__article-content');
                        articleContentDate.classList.add('cards__article-content-date');
                        articleContentHeader.classList.add('cards__article-content-header');
                        articleContentText.classList.add('cards__article-content-text');
                        articleContentSource.classList.add('cards__article-content-source');
                        articleImageButton.classList.add('cards__article-button-trash');
                        articleImageButton.classList.add('button__effect');


                        articleCard.appendChild(articleImage);
                        articleImage.appendChild(articleImageButtonUnsave);
                        articleImage.appendChild(articleImageButton);
                        articleImage.appendChild(articleCategory);
                        articleCard.appendChild(articleContent);
                        articleContent.appendChild(articleContentDate);
                        articleContent.appendChild(articleContentHeader);
                        articleContent.appendChild(articleContentText);
                        articleContent.appendChild(articleContentSource);
                        articleCardListSaved.appendChild(articleCard);

                        articleCategory.textContent = item.keyword;
                        articleImageButtonUnsave.textContent = "Убрать из сохраненных";
                        articleContentDate.textContent = item.date
                        articleContentHeader.textContent = item.title;
                        articleContentText.textContent = item.text;
                        articleContentSource.textContent = item.source;
                        articleContentSource.href = item.link;
                        articleImage.style.backgroundImage = `url(${item.image}`;

                        savedArticleCountHeader.textContent = `${localStorage.getItem('name')}, у Вас ${a} сохраненных статей.`;

                        if (keywordArr.length > 2) {
                            saveCardCategory.textContent = ` ${keywordArr[0]}, ${keywordArr[1]} и еще ${keywordArr.length - 2} словам.`
                        } else if (keywordArr.length == 2) {
                            saveCardCategory.textContent = ` ${keywordArr[0]} и ${keywordArr[1]}`
                        } else if (keywordArr.length == 1) {
                            saveCardCategory.textContent = ` ${keywordArr[0]}`
                        }

                        articleImageButton.addEventListener('click', () => {
                            a--;
                            this.deleteArticle(articleId);
                            articleCard.remove();
                            savedArticleCountHeader.textContent = `${localStorage.getItem('name')}, у Вас ${a} сохраненных статей.`;
                        });
                    }
                })

            })
            .catch((err) => {
                console.log(err);
            });


    }

    saveArticle(date, header, content, source, image, url) {
        fetch('https://mesto-testo.site/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                "keyword": searchFieldInput.value,
                "title": header,
                "text": content,
                "date": date,
                "link": url,
                "source": source,
                "image": image
            })
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteArticle(articleId) {
        fetch(`https://mesto-testo.site/articles/${articleId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .catch((err) => {
                console.log(err);
            });
    }
}