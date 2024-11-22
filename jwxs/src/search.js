load("config.js");
function execute(key, page) {
    url="https://www.sososhu.com/?q="+key+"&site=1"
    var browser = Engine.newBrowser() // Khởi tạo browser
browser.setUserAgent(UserAgent.android()) // Tùy chỉnh user agent
browser.launch(url, 5100)
    //console.log(browser.html())
    let books=[]
        //console.log(response.html())
        let doc=browser.html().select(".hot .item")
        doc.forEach(book => {
            console.log(book)
            books.push({
               cover: book.select(".image a img").attr("src"),
                name: book.select("dl dt").text(),
                link: book.select(".image a").first().attr("href"),
                description: book.select("dl div").text(),
                host: BASE_URL
            })
        });
        return Response.success(books);
    
}