load("config.js")
function execute(url) {
    url=url.replace("book", "xiaoshuo")
    let response=fetch(url+"/")
   let doc=response.html()
   //console.log(doc)
   let data=[]
   let chapters=doc.select(".box_con #list>dl>dt").get(0).select(">div>select>option")
   console.log(chapters)
    chapters.forEach(e => {
        console.log(e)
        data.unshift(BASE_URL+e.attr("value"))
    });
    return Response.success(data);
}