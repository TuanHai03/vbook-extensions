load("config.js");

function execute(url) {
   
        let response=fetch(url+"/")
   let doc=response.html()
   
   let data=[]
   let chapters=doc.select("#list-chapterAll div dd")
    chapters.forEach(e => {
        console.log(e)
        data.push({
            name: e.select("a").first().text(),
            url: e.select("a").first().attr("href"),
            
        })
    });
        return Response.success(data);
    }

  