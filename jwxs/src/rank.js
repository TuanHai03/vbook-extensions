load("config.js");
function execute(url, page) {
    if (!page) page = '1';
let newUrl = url.replace(/\/\d+\/$/, page);
    let response = fetch( BASE_URL + newUrl);

    
console.log( response);
   if (response.ok) {
        
        let doc=response.html();
        let keywords=doc.select("#hotcontent").get(1).select(".item");
        
        let books=[]
        keywords.forEach(book => {
           
            
            books.push({
                cover: book.select(".image a img").attr("src"),
                name: book.select("dl dt").text(),
                link: book.select(".image a").first().attr("href"),
                description: book.select("dl div").text(),
                host: BASE_URL
            })
        });
        let next = parseInt(page, 10) + 1
        return Response.success(books, next.toString());
    }
    return null;
}