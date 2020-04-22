import NewsCard from './newsCard.js';
import { viewMoreButton } from './consts.js';
export default class CardList {
    constructor(container, arr) {
        this.container = container;
        this.arr = arr;
        this.render();
    }

    refreshCardsContainer() {
        const cards = document.querySelectorAll('.cards__article-card');
        for (let i = 0; i < cards.length; i++) {
            cards[i].remove();
        };
    }


    render() {
        this.refreshCardsContainer();
        viewMoreButton.classList.remove('none');
        this.arr.forEach((item) => {
            const date = item.publishedAt.split("T")[0];
            const header = item.title;
            const content = item.description;
            const source = item.source.name;
            const image = item.urlToImage;
            const url = item.url;
            this.container = new NewsCard(date, header, content, source, image, url);
        })

        const cardArr = document.querySelectorAll('.cards__article-card');
        for (let i = 3; i < cardArr.length; i++) {
            cardArr[i].classList.add('none');
        }

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
    }
};