load("config.js");
function execute(url, page) {
    let response = fetch(BASE_URL)  
//console.log( response.html());
   if (response.ok) {
        
        let doc=response.html();
        console.log(doc)
         doc=doc.select(".nav ul li");
        
        let books=[]
        for(i=1;i<doc.length-1;i++){
                 books.push({
                title:doc.get(i).text(),
                script:"rank.js",
                input:doc.get(i).select("a").first().attr("href")
            })
        }
        return Response.success(books);
    }
    return null;
}