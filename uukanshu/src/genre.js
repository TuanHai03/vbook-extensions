load("config.js");
function execute(url, page) {
    if (!page) page = '1';
    let response = fetch( "https://uukanshu.cc/class_1_1.html");

    
console.log( response);
   if (response.ok) {
        
        let doc=response.html();
        
        let keywords=doc.select(".class ul li");
        
        let books=[]
        keywords.forEach(book => {
           
            
            books.push({
                title:book.text(),
                script:"rank.js",
                input:book.select("a").first().attr("href")

            })
        });
        return Response.success(books);
    }
    return null;
}