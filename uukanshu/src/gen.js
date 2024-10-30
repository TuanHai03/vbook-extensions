load("config.js");
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch( BASE_URL + url+"_" + page + ".html");

    
console.log( response);
   if (response.ok) {
        
        let doc=response.html();
        let next=doc.select(".next").first().attr("href")
        let keywords=doc.select(".bookbox");
        
        let books=[]
        keywords.forEach(book => {
           
            
            books.push({
                
                name: book.select(".bookname").text(),
                link: book.select(".bookname a").first().attr("href"),
                description: book.select(".author .del_but").text().replace("作者：", ""),
                host: BASE_URL
            })
        });
        return Response.success(books, next);
    }
    return null;
}