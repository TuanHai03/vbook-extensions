load("config.js")
function execute(input, page) {

    let response = fetch(BASE_URL);
    //console.log(url)
    //console.log(response.html())
    if(response.ok){
        let doc=response.html()   
        let list=[]
        console.log(doc)
        let books = doc.select("#newscontent .l ul li")
        //console.log(books)
        books.forEach(book => {
            //console.log(book)
            list.push({
                name: book.select(".s2").text(),
                link: book.select(".s2 a").attr("href"),
                description: book.select(".s4").text()+book.select(".s5").text(),
                host: BASE_URL
            })
        });
        //console.log(books.length)
        return Response.success(list);
}
    return null;
}