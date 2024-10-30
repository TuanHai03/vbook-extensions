load("config.js");

function execute(url) {
   
    let doc = fetch(url).html();
    //console.log(doc)
    if (doc) {
        let info = doc.select(".bookinfo");
       let booktag=doc.select(".booktag span")
            let tag=doc.select(".booktag a").text()
       booktag.forEach(e=>{
           tag+="<br>"+e.text()
       })

        let authors=info.select(".booktag a.red").first().text().replace("作者：", "")
        return Response.success({
            name: info.select("h1.booktitle").text(),
            cover: info.select(".thumbnail").first().attr("src"),
            
            author: authors,
            description: info.select(".bookintro").text(),
            detail: tag+"<br>"+info.select(".booktime").text(),
            host: BASE_URL,
            suggests:[{title:"Cùng tác giả",input:"/modules/article/authorarticle.php?author="+authors,script:"genres.js"}],
            url: url,
        });
    }

    return null;

}