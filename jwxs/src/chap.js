load("config.js");
function execute(url) {
   let response=fetch(url)
   let doc=response.html()
   htm=doc.select("#booktxt").html()
    return Response.success(htm);
}