import { articleCardListSaved,savedArticleCountHeader } from './consts.js';
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
                        // articleCategory.classList.add('cards__article-category');
                        articleCategory.classList.add('button__effect');
                        articleImageButtonUnsave.classList.add('cards__article-button-unsave');
                        articleContent.classList.add('cards__article-content');
                        articleContentDate.classList.add('cards__article-content-date');
                        articleContentHeader.classList.add('cards__article-content-header');
                        articleContentText.classList.add('cards__article-content-text');
                        articleContentSource.classList.add('cards__article-content-source');
                        articleImageButton.classList.add('cards__article-button-trash');
                        articleImageButton.classList.add('button__effect');

                        articleCardListSaved.appendChild(articleCard);
                        articleCard.appendChild(articleImage);
                        articleImage.appendChild(articleImageButtonUnsave);
                        articleImage.appendChild(articleImageButton);
                        articleImage.appendChild(articleCategory);
                        articleCard.appendChild(articleContent);
                        articleContent.appendChild(articleContentDate);
                        articleContent.appendChild(articleContentHeader);
                        articleContent.appendChild(articleContentText);
                        articleContent.appendChild(articleContentSource);

                        articleImageButtonUnsave.textContent = "Убрать из сохраненных";
                        articleContentDate.textContent = item.date
                        articleContentHeader.textContent = item.title;
                        articleContentText.textContent = item.text;
                        articleContentSource.textContent = item.link;
                        articleImage.style.backgroundImage = `url(${item.keyword}`;

                        articleImageButton.addEventListener('click', function () {
                            articleCard.remove();
                            fetch(`https://mesto-testo.site/articles/${articleId}`, {
                                method: 'DELETE',
                                headers: {
                                    'Authorization': localStorage.getItem('token')
                                }
                            })
                        });
                    }
                })
                savedArticleCountHeader.textContent = `${localStorage.getItem('name')}, у Вас ${a} сохраненных статей.`;
            })
    };
}
