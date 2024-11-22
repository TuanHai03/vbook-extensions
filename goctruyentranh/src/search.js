load("config.js");
function execute(key, page) {
    url=BASE_URL+"/api/comic/search?name="+key
    let response=fetch(url)
    let books=[]
    if(response.ok){
        //console.log(response.html())
        let json= response.json()
        json.result.forEach(book => {
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
}