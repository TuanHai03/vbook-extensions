load("config.js")
function execute(input, page) {
    if (!page) page = '1';
    url= BASE_URL+"/danh-sach/"+input+"?page="+page;
    let response = fetch(url);
    if(response.ok){
        let doc=response.html()
        //console.log(doc)
        let list=[]
        let books = doc.select("main section >div").get(2).select(">div")
        //console.log(books)
        books.forEach(book => {
           
            
            list.push({
                cover: BASE_URL+book.select(".relative a img").first().attr("src"),
                name: book.select(".flex-grow a").get(1).text(),
                link: book.select(".relative a").first().attr("href"),
                description: book.select(".mt-4 li").first().select("a span").first().text(),
                host: BASE_URL
            })
        });
        //console.log(books.length)
        let next = parseInt(page, 10) + 1
        return Response.success(list,next.toString());
}
    return null;
}