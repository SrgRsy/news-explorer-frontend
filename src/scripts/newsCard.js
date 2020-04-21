import { popupSignupContainer, articleCardList, popupContainer,searchFieldInput } from './consts.js';

export default class NewsCard {
    constructor(date, header, content, source, image, url) {
        this.articleCard = this.createNews(date, header, content, source, image, url);
    }
    createNews(date, header, content, source, image, url) {
        const articleCard = document.createElement('div');
        const articleImage = document.createElement('div');
        const articleImageButton = document.createElement('button');
        const articleContent = document.createElement('div');
        const articleContentDate = document.createElement('span');
        const articleContentHeader = document.createElement('h2');
        const articleContentText = document.createElement('p');
        const articleContentSource = document.createElement('a');

        if (localStorage.getItem("token")) {
            const articleImageButtonSave = document.createElement('button');
            articleImageButtonSave.classList.add('cards__article-button-chosen');
            articleImage.appendChild(articleImageButtonSave);
        } else {
            const articleImageButtonSignin = document.createElement('button');
            articleImageButtonSignin.classList.add('cards__article-button-unsave');
            articleImageButtonSignin.classList.add('button__effect');
            articleImageButtonSignin.textContent = "Войдите, чтобы сохранять статьи."
            articleImage.appendChild(articleImageButtonSignin);


            articleImageButton.addEventListener('click', function () {
                popupSignupContainer.classList.remove('popup_is-opened');
                popupContainer.classList.add('popup_is-opened');
            });

            articleImageButtonSignin.addEventListener('click', function () {
                popupSignupContainer.classList.remove('popup_is-opened');
                popupContainer.classList.add('popup_is-opened');
            });


        }

        articleCard.classList.add('cards__article-card');
        articleImageButton.classList.add('cards__article-button-chosen');
        articleImage.classList.add('cards__article-image')
        articleImageButton.classList.add('button__effect');
        articleContent.classList.add('cards__article-content');
        articleContentDate.classList.add('cards__article-content-date');
        articleContentHeader.classList.add('cards__article-content-header');
        articleContentText.classList.add('cards__article-content-text');
        articleContentSource.classList.add('cards__article-content-source');


        articleCard.appendChild(articleImage);
        articleImage.appendChild(articleImageButton);
        articleCard.appendChild(articleContent);
        articleContent.appendChild(articleContentDate);
        articleContent.appendChild(articleContentHeader);
        articleContent.appendChild(articleContentDate);
        articleContent.appendChild(articleContentHeader);
        articleContent.appendChild(articleContentText);
        articleContent.appendChild(articleContentSource);
        articleCardList.appendChild(articleCard);


        articleImage.style.backgroundImage =  "url(" + image + ")";
        articleContentDate.textContent = date;
        articleContentHeader.textContent = header;
        articleContentText.textContent = content;
        articleContentSource.textContent = source;
        articleContentSource.href = url;
        articleContentSource.target = "_blank";


        articleCard.addEventListener('click', (event) => {
            if (event.target.classList.contains('cards__article-button-chosen')) {
                event.target.classList.add('cards__article-button-chosen_saved');
                this.saveArticle(date, header, content, source, image, url);
            };
        })

    }
    saveArticle(date, header, content, source, image, url) {
        fetch('https://mesto-testo.site/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                "keyword": image,
                "title": header,
                "text": content,
                "date": date,
                "link": url,
                "source": source,
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    }
};

