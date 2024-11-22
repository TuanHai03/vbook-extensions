load("config.js")
function execute(url) {
    let response = fetch(url);   
    let chapter=[]
    if (response.ok) {
        let doc = response.html()
        id=doc.select("main>div>input").first().attr("value")
        doc.select("#content>div>div").get(2).select(">div>div").get(1).select(">div>a").forEach(e=>{
             chapter.unshift({
                name: "Chương "+e.select(".chapter-info").text().replace("#", ""),
                url: url+"/chuong-"+e.select(".chapter-info").text().replace("#", ""),
                host: BASE_URL
            })
        })
        
        urls=BASE_URL+"/api/comic/"+id+"/chapter?offset=21&limit=-1"
        sleep(1000)
         response = fetch(urls);
        // console.log(response.html())
        if(response.ok){
            response=response.json().result.chapters
            
            response.forEach(e => {
            chapter.unshift({
                name: "Chương "+e.numberChapter,
                url: url+"/chuong-"+e.numberChapter,
                host: BASE_URL
            })
        });
return Response.success(chapter);
        }
        //console.log(doc.select(".text-white .line-clamp-3"))
       
        
    
    
    }
}