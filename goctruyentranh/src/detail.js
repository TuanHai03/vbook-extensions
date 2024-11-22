load("config.js")
function execute(url) {
    let response = fetch(url);
    let details=""
    console.log(response.ok)
    if (response.ok) {
        let doc = response.html()//.select("main>div>section");
        console.log(doc.select("#content>div>div>div").get(2))
        doc.select("#content>div>div").get(1).select(".information-section.pa-4 div").forEach(e=>{
                details+=e.text()+"<br>";
        })
        doc.select("#content>div>div>div .group-content a").forEach(e=>{
                details+=e.text()+"<br>";
        })
        //console.log(doc.select(".text-white .line-clamp-3"))
       
        return Response.success({
        name: doc.select("#content>div>div>div").get(0).text(),
        cover: BASE_URL+doc.select("main .side-bar img").attr("src"),
        description: doc.select("#content>div>div>div").get(2).text(),
        detail: details,
        host: BASE_URL,
    });
    
    }else{
        return Response.success("Bạn cần vượt capcha để tiếp tục")
    }

}