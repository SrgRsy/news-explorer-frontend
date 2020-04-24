import CardList from '../card/cardList.js'
import { articleCardList,noResults } from '../const/consts.js';


export default class NewsApi {
    constructor(keyword) {
        const week = 7;
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate() - week;
        this.getNews(keyword, year, month, day);


    }
    getNews(keyword, year, month, day) {
        fetch('http://newsapi.org/v2/everything?' +
            'q=' + keyword + '&' +
            'from=' + year + '-' + month + '-' + day + '&' +
            'sortBy=date&' +
            'apiKey=6f52385eaa764269a795bb3f0ba399f8', {
        })
            .then(res => res.json())
            .then((result) => {
                if (result.articles == 0) {
                    noResults.classList.add('popup_is-opened');
                } else {
                    noResults.classList.remove('popup_is-opened');
                    new CardList(articleCardList, result.articles);
                }
            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    };
}