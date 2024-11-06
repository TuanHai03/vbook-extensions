load('libs.js');
load('config.js');

function execute(key, page) {


    // gb18030, gbk uri encode
    // '打更人' --> '%B4%F2%B8%FC%C8%CB'
    // https://www.69shu.com/modules/article/search.php?searchkey=%B4%F2%B8%FC%C8%CB&searchtype=all
    var gbkEncode = function(s) {
        load('gbk.js');
        return GBK.encode(s);
    } // Khởi tạo browser

    var url = BASE_URL+'/modules/article/search.php';
     //console.log(url);

    var response = fetch(url,{
  method: "POST", // GET, POST, PUT, DELETE, PATCH
  headers: {
   'user-agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  },
  body: {
    "searchkey": gbkEncode(key),
    "submit": "Search"
  }
})
  //console.log(response.html('gbk')) 

  if (response.ok) {
        let doc = response.html('gbk');

        let books=[]
        
        doc.select(".newbox").forEach(book => {
            console.log(book)
            books.push({
                name: book.select(".newnav h3").text(),
                cover: book.select("img").first().attr("src"),
                link: book.select(".newright a").first().attr("href"),
                description: book.select(".ellipsis_2").text(),
host: BASE_URL
            })
});
        return Response.success(books);
}
    
    return null;

}