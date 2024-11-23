load("config.js")
function execute(url) {
    
    let response=fetch(url+"/")
   let doc=response.html()
   console.log(doc)
   let data=[]
   let chapters=doc.select(".box_con #list>dl>div a")
   console.log(chapters)
    chapters.forEach(e => {
        console.log(e)
        data.unshift({
            name: e.text(),
            url: BASE_URL+e.attr("href"),
            
        })
    });
        return Response.success(data);
    }