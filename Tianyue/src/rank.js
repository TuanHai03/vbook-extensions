load("config.js");
function execute(url, page) {
    if (!page) page = '1';
url=url.replace("_1", "read")
    let response = fetch( BASE_URL + url+page+".html");
    let data=[]
   if (response.ok) {
         let doc = response.html();
        let rows = doc.select(".list li")
        rows.forEach(e => {
            data.push({
                name: e.select(".bookname").text(),
                link: e.select("> a").attr("href"),
                description: e.select(".intro").text(),
                cover: e.select("img").first().attr("src"),
                host: BASE_URL
            })
        });
        let next = parseInt(page, 10) + 1
        return Response.success(data, next.toString());
    }
    return null;
}