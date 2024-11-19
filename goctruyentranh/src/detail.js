load("config.js")
function execute(url) {
    let response = fetch(url);
    let details=""
    
    if (response.ok) {
        let doc = response.html().select("main>div>section");
        doc.first().select("aside").get(1).select(">p").forEach(e=>{
                details+=e.text()+"<br>";
        })
        //console.log(doc.select(".text-white .line-clamp-3"))
       
        return Response.success({
        name: doc.select(".text-white>h1").text(),
        cover: BASE_URL+doc.select(".relative img").first().attr("src"),
        description: doc.select(".text-white .line-clamp-3").text(),
        detail: details,
        host: BASE_URL,
    });
    
    }
}