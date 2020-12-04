import CardList from '../card/cardList.js'
import { articleCardList, noResults } from '../const/consts.js';


export default class NewsApi {
    constructor(keyword) {
        const now = new Date();
        const week = 604800000;
        const nowDate = now.getTime();
        const ago = nowDate - week;
        const lastweek = new Date(ago);
        const year = lastweek.getFullYear();
        const month = lastweek.getMonth() + 1;
        const day = lastweek.getDate() - 7;
        this.getNews(keyword, year, month, day);


    }
    getNews(keyword, year, month, day) {
        fetch('http://newsapi.org/v2/everything?' +
            'q=' + keyword + '&' +
            'from=' + year + '-' + month + '-' + day + '&' +
            'sortBy=date&' +
            'apiKey=6f52385eaa764269a795bb3f0ba399f8', {
        })
            .then((res) => {
                if (!res.ok) {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
                return res.json();
            })
            .then((result) => {
                if (result.articles == 0) {
                    noResults.classList.add('popup_is-opened');
                } else {
                    noResults.classList.remove('popup_is-opened');
                    console.log(result.articles);
                    new CardList(articleCardList, result.articles);
                }
            })
            .catch((err) => res.status(statusCode).send({ message: err.message }))
    };
}
