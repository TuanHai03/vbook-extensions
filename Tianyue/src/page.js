load("config.js")
function execute(url) {
    url=url.replace("book", "read").replace(".html","/")
    let response=fetch(url+"/")
    console.log(response.ok)
    if(response.ok){
   let doc=response.html()
   //console.log(doc)
   let data=[]
   const regex = /共 (\d+)/;
   console.log(doc.select(".caption").text().match(regex)[1])
   const totalChapters = parseInt( doc.select(".caption").text().match(regex)[1])
   url=url.replace(/\/(?=[^\/]*$)/,"_")
   console.log(url)
for (let chap = 1; chap <= Math.ceil(totalChapters / 50); chap++) {
    data.push(url+chap+"/")
}
    return Response.success(data);
    }

}