load('config.js');
function execute() {
    let tag=[]
    url=TAG_URL;
    let response=fetch(url)
    if(response.ok){
      doc=  response.html()
      
        doc=doc.select(".container>.mybox>div>.tag>ul li")
        console.log(doc)
        doc.forEach(e=>{
            tag.push({title:e.text(),input:BASE_URL+"/blist/tag/"+e.text()+"/",script: "gen2.js"},)
        })
    }
    return Response.success(tag);
}