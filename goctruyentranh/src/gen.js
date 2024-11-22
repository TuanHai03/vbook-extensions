load("config.js")
function execute(input, page) {
    if (!page) page = '0';
    url= "https://goctruyentranhvui6.com/api/v2/search?p="+page+"&searchValue=&orders%5B%5D="+input;
    let response = fetch(url,{
        method: "GET",
        headers: {
    "User-Agent": UserAgent.android()
  }
    });
    //console.log(url)
    //console.log(response.html())
    if(response.ok){
        let doc=response.json()    
        let list=[]
        //console.log(doc)
        let books = doc.result.data
        //console.log(books)
        books.forEach(book => {
            //console.log(book)
            list.push({
                cover: BASE_URL+book.photo,
                name: book.name,
                link: BASE_URL+"/truyen/"+book.nameEn,
                description: book.description,
                host: BASE_URL
            })
        });
        //console.log(books.length)
        let next = parseInt(page, 10) + 1
        return Response.success(list,next.toString());
}
    return null;
}