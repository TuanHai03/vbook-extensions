load("config.js");
function execute(url) {
   let response=fetch(url)
   let doc=response.html()
   console.log(doc.select(".readcotent").text())
   htm=doc.select(".readcotent").html()
    return Response.success(htm);
}