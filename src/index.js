import articlesTpl from "./articles.handlebars"
import { NewsApi } from "./api-servis"


const articlesContainer = document.querySelector('.js-articles-container')
const elements = {
    formEl: document.querySelector('.js-search-form'),
    loadMoreButtonEl: document.querySelector('[data-action="load-more"]')
}


const newsApiServise = new NewsApi()



elements.formEl.addEventListener('submit', onFormButtonClick)


function onFormButtonClick(event){

    event.preventDefault()
    const form = event.currentTarget
    newsApiServise.searchQuery= form.elements.query.value

    newsApiServise.resetPage( )
    newsApiServise.getArticlesFunction()
    .then((articles) => {createMarkup(articles)})
}

elements.loadMoreButtonEl.addEventListener('click', onLoadMoreBtnClick)

function onLoadMoreBtnClick(){
    newsApiServise.getArticlesFunction()
    .then((articles) => console.log(articles))
}
