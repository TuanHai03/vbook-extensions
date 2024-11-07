load('config.js')

function execute(url) {
    let response = fetch(url);let data=[]
    if (response.ok) {

        let doc = response.html();
        //console.log(json)
        
        let chapters=doc.select(".catalog_box .catalog_ul li")
        chapters.forEach(e => {
        console.log(e)
        data.push({
            name: e.select("a").first().text(),
            url: e.select("a").first().attr("href"),
            
        })
        
    })
        
        return Response.success(data);
       
    }
    return null;
}

