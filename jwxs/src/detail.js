load("config.js")
function execute(url) {
    let response = fetch(url+"/");
    let details=""
    if (response.ok) {
        let doc = response.html()
        
        doc=doc.select(".box_con #maininfo")
        doc.select("#info p").forEach(e=>{
                details+=e.text()+"<br>";
        })
        //console.log(doc)
        return Response.success({
        name: doc.select("#info h1").text(),
        cover: doc.select("#sidebar img").attr("src"),
        description: doc.select("#intro").text(),
        detail: details,
        host: BASE_URL,
    });    
    }
    return null;
}