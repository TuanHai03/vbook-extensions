load('config.js');
function execute() {
    let home=[]
    home.push(
        {title: "最新更新", input: "/last", script: "update.js"},
    )
    url=HOME_URL;
    let response=fetch(url)
    
    if(response.ok){
      doc=  response.html()
        doc=doc.select(".container>.mybox>.weekl_yrank>ul li a")
        console.log(doc)
        doc.forEach(e=>{
            home.push({title:e.text(),input:e.attr('href'),script: "gen.js"},)
        })
    }
    return Response.success(home);
}