load("config.js");
function execute(url) {
    keys=fetch(url)
    if(keys.ok){
        let books=keys.json() 
        //return Response.success(books.data);
        try{
return Response.success(books.data.replace(/<i([^>]*)t='(.*?)'([^>]*)>(.*?)<\/i>/g, `<i$1t='$2'$3>$2</i>`));
        }catch(error){
            return Response.success(books.data);
        }
         }
        return null;
}