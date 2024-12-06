load('config.js');
function execute() {
    let home=[]
    url=HOME_URL;
    let response=fetch(url)
    
    if(response.ok){
      doc=  response.html()
        doc=doc.select(".container>.mybox .listleft>ul li a")
        console.log(doc)
        doc.forEach(e=>{
            home.push({title:e.text(),input:e.attr('href'),script: "gen.js"},)
        })
    }
    return Response.success(home);
}