import articlesTpl from "./articles.handlebars"
import { NewsApi } from "./api-servis"

const newsApiServise = new NewsApi()
const articlesContainer = document.querySelector('.js-articles-container')
const elements = {
    formEl: document.querySelector('.js-search-form'),
    loadMoreButtonEl: document.querySelector('[data-action="load-more"]')
}

elements.formEl.addEventListener('submit', onFormButtonClick)


function onFormButtonClick(event){
event.preventDefault()
    const form = event.currentTarget
    newsApiServise.searchQuery= form.elements.query.value
    form.elements.query.value='';
    newsApiServise.resetPage( )
    newsApiServise.getArticles()
    .then((articles) => {createMarkup(articles)})
}

elements.loadMoreButtonEl.addEventListener('click', onLoadMoreBtnClick)

function onLoadMoreBtnClick(){
    newsApiServise.getArticles()
    .then((articles) => console.log(articles))
}

function createMarkup(articles){
    const markup = articlesTpl(articles)
    articlesContainer .insertAdjacentHTML('beforeend', markup)
}

