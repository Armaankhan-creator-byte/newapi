//b0cfc6ad04134bf9b62a8fb33e58a093
let source='bbc-news';
let apiKey='b0cfc6ad04134bf9b62a8fb33e58a093';
console.log("this is news api");
let accordion=document.getElementById('accordion');
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

xhr.onload= function()
{
    if(this.status ===200){
        let json=JSON.parse(this.responseText);
    
        let articles=json.articles;
        console.log(articles);
        let newhtml="";
        articles.forEach(function(element ,index){
            let news=`<div class="card">
            <div class="card-header" id="heading${index}">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne${index}" aria-expanded="true" aria-controls="collapseOne${index}">
                <b>Breaking News ${index+1}:</b> ${element["title"]}
                </button>
              </h5>
            </div>
        
            <div id="collapseOne${index}" class="collapse " aria-labelledby="headingOne${index}" data-parent="#accordion">
              <div class="card-body">
              <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
              </div>
            
          </div>`;
          newhtml+=news;
            
        });
        accordion.innerHTML=newhtml;

    }
    else{
        console.log("some error has occured");
    }
}
xhr.send();

