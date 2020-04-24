import { articleCardListSaved, savedArticleCountHeader, saveCardCategory } from '../const/consts.js';
export default class SavedArticles {
    constructor() {
        this.savedNews();


    }
    savedNews() {
        fetch('https://mesto-testo.site/articles', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
            .then(res => res.json())
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
                        articleContentSource.textContent = item.link;
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

                        articleImageButton.addEventListener('click', function () {
                            a--;
                            articleCard.remove();
                            fetch(`https://mesto-testo.site/articles/${articleId}`, {
                                method: 'DELETE',
                                headers: {
                                    'Authorization': localStorage.getItem('token')
                                }
                            })
                            savedArticleCountHeader.textContent = `${localStorage.getItem('name')}, у Вас ${a} сохраненных статей.`;
                        });
                    }
                })

            })
            .catch((err) => res.status(statusCode).send({ message: err.message }));
    };
}
