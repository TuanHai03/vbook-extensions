load("config.js");
function execute(url, page) {
    let response = fetch(BASE_URL+"/sort/")  
//console.log( response.html());
   if (response.ok) {
        
        let doc=response.html();
        console.log(doc)
         doc=doc.select(".sort li");
        
        let books=[]
        for(i=2;i<doc.length-1;i++){
                 books.push({
                title:doc.get(i).text(),
                script:"rank.js",
                input:doc.get(i).select("a").first().attr("href").replace("_1/","/")
            })
        }
        return Response.success(books);
    }
    return null;
}