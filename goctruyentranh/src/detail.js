load("config.js")
let details="";
function execute(url) {
    let response=fetch(url,{
method: "GET",
        headers: {
    "User-Agent": UserAgent.android()
    }})// lấy html

if(response.ok) // kiểm tra xem có lấy được ko
{
    //console.log(response.html())
let doc = response.html()
        doc=doc.select("main.main>div.main-wrap>div.row.mb-5>div")// lấy phần chính
        img=doc.get(0).select("img").attr("src")//lấy ảnh   
        doc=doc.select("#content>div>div")// lấy html chứa info
        //console.log(doc.select(">div").get(1)) 
        doc.get(1).select(".information-section.pa-4 div").forEach
        (e=>
            {
                details+=e.text()+"<br>";
            }   
        )
        details+="Thể loại: "
        doc.select(">div").get(1).select("div .group-content a").forEach
        (e=>
            {
                    details+=e.text()+", ";
            }
        )
        details=details.slice(0, -2);
        return Response.success({
        name: doc.select(">div").get(0).text(),
        cover: img,
        description: doc.select(">div").get(2).text(),
        detail: details,
        host: BASE_URL,
    });
    
}    
}
