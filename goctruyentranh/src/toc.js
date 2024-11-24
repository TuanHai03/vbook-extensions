load("config.js")
function execute(url) {
       let response=fetch(url,{
method: "GET",
        headers: {
    "User-Agent": UserAgent.android()
    }})// lấy html

if(response.ok)
    let chapter=[]
    if (response.ok) {
        let doc = response.html()
        id=doc.select("main>div>input").first().attr("value")
        doc=doc.select("main.main>div.main-wrap>div.row.mb-5>div#content>div>div.rounded.w-100.mt-2.mb-3>.chapter-list>.list>div")
        //console.log(doc)
        doc.forEach(e=>{
             chapter.unshift({
                name: "Chương "+e.select(".chapter-info").text().replace("#", ""),
                url: url+"/chuong-"+e.select(".chapter-info").text().replace("#", ""),
                host: BASE_URL
            })
        })
        console.log("check")
        urls=BASE_URL+"/api/comic/"+id+"/chapter?offset=21&limit=-1"
         response = fetch(urls,{
method: "GET",
        headers: {
    "User-Agent": UserAgent.android(),
    "Referer":url
    }})
         //console.log(response.html())
        if(response.ok){
            
            response=JSON.parse(response.text())
            if(response!=null){
                console.log(response.result.chapters)
                response=response.result.chapters
            response.forEach(e => {
            chapter.unshift({
                name: "Chương "+e.numberChapter,
                url: url+"/chuong-"+e.numberChapter,
                host: BASE_URL
            })
        });
            }
            
return Response.success(chapter);
        }
        //console.log(doc.select(".text-white .line-clamp-3"))
       
        
    
    
    }
}