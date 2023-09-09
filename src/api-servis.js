
const BASE_URL= 'https://newsapi.org/v2/'
const options = {
    headers:{
        'X-Api-Key': '95c32c40fc4841839d7f78e8fd498720'
    }
}


export class NewsApi {
    constructor(){
       this.searchQuery = ''
       this.page = 1
    }
    
    getArticles(searchQuery){
   return fetch(`${BASE_URL}everything?q=${this.searchQuery}&pageSize=10&page=${this.page}`, options)
    .then(response => response.json())
    .then(articles=>{
          this.increasePage
          return articles.articles
    })
}

increasePage(){
    this.page += 1
}

resetPage(){
    this.page = 1
}

}

