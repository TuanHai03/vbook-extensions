load("config.js");
function execute(key, page) {
    if (!page) page = '1';
    let response = fetch(URL_STV+"/io/searchtp/searchBooks?find=&findinname="+key+"&minc=0&p=" + page+"&tag=");
    if(response.ok){
        let doc = response.html()
        let next = doc.select(".pagination").select("li.active + li").text()
        let el = doc.select("a.booksearch")
        let data = [];
        el.forEach(e => {
            data.push({
                name: e.select(".searchbooktitle").first().text(),
                link: e.select("a").first().attr("href"),
                cover: e.select("img").first().attr("src"),
                description: e.select(" div > span.searchtag").last().text(),
                host: URL_STV
            })
        });
        return Response.success(data, next)
    }
    return null;
}