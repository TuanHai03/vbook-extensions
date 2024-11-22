load("config.js");
function execute(key, page) {
    url="https://www.sososhu.com/?q="+key+"&site=1"
    var browser = Engine.newBrowser() // Khởi tạo browser
browser.setUserAgent(UserAgent.android()) // Tùy chỉnh user agent
browser.launch(url, 5100)
    console.log(browser.html())
    let books=[]
        //console.log(response.html())
        let doc=browser.html().select(".hot .item")
        doc.forEach(book => {
            console.log(book)
            books.push({
                name: book.name,
                link: BASE_URL+"/truyen/"+book.nameEn,
                description: book.description,
                cover:book.photo,
                host: BASE_URL
            })
        });
        return Response.success(books);
    
}