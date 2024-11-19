load("config.js")
function execute(url) {
    let response = fetch(url);
    let details=""
    
    if (response.ok) {
        let doc = response.html().select("main>div>section").get(1).select(">div").first().select("ul li");
        console.log(doc)
         let data=[]
   let chapters=doc
    chapters.forEach(e => {
        //console.log(e)
        data.unshift({
            name: e.select("a>div").first().text(),
            url: BASE_URL+e.select("a").first().attr("href"),
            
        })
    });
        return Response.success(data);
    }
    return null;
}