load("config.js");
function execute(input, page) {
    let response = fetch( BASE_URL+input); 
   if (response.ok) {        
        let doc=response.html();
        let keywords=doc.select(".bookbox");
        console.log( keywords);
        let books=[]
        keywords.forEach(book => {                      
            books.push({                
                name: book.select(".bookname").text(),
                link: book.select(".bookname a").first().attr("href"),
                description: book.select(".author .del_but").text().replace("作者：", ""),
                host: BASE_URL
            })
        });
        return Response.success(books);
    }
    return null;
}