load('config.js');
function execute() {
    let tag=[]
    url=TAG_URL;
    let response=fetch(url)
    
    if(response.ok){
      doc=  response.html()
      console.log(doc.select(".container>.mybox .tag"))
        doc=doc.select(".container>.mybox .tag>ul a")
        console.log(doc)
        doc.forEach(e=>{
            tag.push({title:e.text(),input:BASE_URL+"/articlelist/tag/"+e.text()+"/",script: "gen2.js"},)
        })
    }
    return Response.success(tag);
}