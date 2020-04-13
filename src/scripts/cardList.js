import NewsCard from './newsCard.js';
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
        this.arr.forEach((item) => {
            const date = item.publishedAt.split("T")[0];
            const header = item.title;
            const content = item.description;
            const source = item.source.name;
            const image = "url(" + item.urlToImage + ")";
            const url = item.url;
            this.container = new NewsCard(date, header, content, source, image, url);
        })

    }
};