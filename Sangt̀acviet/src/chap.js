load("config.js");
function execute(url) {
    keys=fetch(url)
    if(keys.ok){
        let books=keys.text().match(/\{[\s\S]*\}/)[0]
        books=JSON.parse(books)
        //return Response.success(books)
        try{
            console.log("0")
            return Response.success(books.data.replace(/<i([^>]*)t='(.*?)'([^>]*)>(.*?)<\/i>/g, `<i$1t='$2'$3>$2</i>`).replace(/\n\t/g, "<\/p><p>\t")
);
            
        }catch(error){
            try{
                console.log("1")
                return Response.success(books.data.replace(/\n\t/g, "<\/p><p>\t"));
            }catch(error){
                console.log("2")
                return Response.error(books.err)
            }
            
        }
         }
        return Response.error("HTTP SEVER không hoạt động");
}