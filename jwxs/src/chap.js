load("config.js");
function execute(url) {
    let htm=""
   let response=fetch(url)
   let doc=response.html()
//    let text = doc.select(".bookname").text();
//    console.log(text)
// let regex = /（(\d+)\/(\d+)）/;
// let matches = text.match(regex);
// console.log(matches[2])
   htm=doc.select("#booktxt").html()
   response=fetch(url.replace(".html", "_2.html"))
   doc=response.html()
   htm+=doc.select("#booktxt").html()
    return Response.success(htm);
}