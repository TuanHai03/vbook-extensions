load("config.js");
function execute(key, page) {
    if (!page) page = '1';
    let ipage="/1.html"
    if(page!=1){
        ipage="_"+page+".html"
    }
    url=BASE_URL+"/search/"+key+ipage;

     let response = fetch(url);
    if (response.ok) {
        
        let doc=response.html();
        //console.log()
        
        let next=doc.select(".next").first().attr("href")
        
    
        let keywords=doc.select(".bookbox");
        //console.log( keywords);
        let books=[]
        books.push(checknext(next,doc))
        keywords.forEach(book => {
            console.log(book)
            books.push({
                name: book.select(".bookname").text(),
                link: book.select(".bookname a").first().attr("href"),
                description: book.select(".bookinfo .del_but").text(),
                host: BASE_URL
            })
        });
        return Response.success(books, next);
    }
    return null;
    
}
function checknext(next,doc){
    if(next.length==0){
console.log(doc)
        let info = doc.select(".bookinfo");
       let booktag=doc.select(".booktag span")
            let tag=doc.select(".booktag a").text()
       booktag.forEach(e=>{
           tag+="<br>"+e.text()
       })

        let authors=info.select(".booktag a.red").first().text().replace("作者：", "")
        return {
            name: info.select("h1.booktitle").text(),
            link:doc.select('meta[property="og:novel:read_url"]').attr("content"),
            cover: info.select(".thumbnail").first().attr("src"),
            description: info.select(".bookintro").text(),
            host: BASE_URL,
        };
    
    }
    return null;

}