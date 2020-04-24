import NewsCard from './newsCard.js';
import { viewMoreButton } from '../const/consts.js';
export default class CardList {
    constructor(container, arr) {
        this.container = container;
        this.arr = arr;
        this.render();
    }

    refreshCardsContainer() {
        const cards = document.querySelectorAll('.cards__article-card');
        cards.forEach((item) => {
            item.remove();
        });
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
        const amountCardsShow = 3;
        for (let i = amountCardsShow; i < cardArr.length; i++) {
            cardArr[i].classList.add('none');
        }
    }


};