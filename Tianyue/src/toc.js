load("config.js");
function execute(url) {
    url=url.replace("book", "read").replace(".html","/")
    console.log(url)
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc  = doc.select(".read");
            let list = [];
            doc.select("li a").forEach(e => {
                list.push({
                    name: e.text(),
                    url: e.attr("href"),
                    host: BASE_URL
                });
            });
            return Response.success(list);
        
    }
    return null;
}