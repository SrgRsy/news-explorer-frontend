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
        cards.forEach((containers) => {
            containers.remove();
        });
    }


    render() {
        this.refreshCardsContainer();
        viewMoreButton.classList.remove('none');
        this.arr.forEach((cards) => {
            const date = cards.publishedAt.split("T")[0];
            const header = cards.title;
            const content = cards.description;
            const source = cards.source.name;
            const image = cards.urlToImage;
            const url = cards.url;
            this.container = new NewsCard(date, header, content, source, image, url);
        })

        const cardArr = document.querySelectorAll('.cards__article-card');
        const amountCardsShow = 3;
        for (let i = amountCardsShow; i < cardArr.length; i++) {
            cardArr[i].classList.add('none');
        }
    }


};