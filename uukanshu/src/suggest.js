load("config.js");
function execute(input, page) {
    let response = fetch( BASE_URL+input); 
   if (response.ok) {        
        let doc=response.html();
        let keywords=doc.select(".bookbox");
        console.log( keywords);
        let next=doc.select(".next").first().attr("href")
        let books=[]
        keywords.forEach(book => {                      
            books.push({                
                name: book.select(".bookname").text(),
                link: book.select(".del_but").first().attr("href"),
                description: book.select(".update").text(),
                host: BASE_URL
            })
        });
        return Response.success(books,next);
    }
    return null;
}