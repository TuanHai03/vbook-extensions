load("config.js");
function execute(url) {
const regex = /var\s+bookinfo\s*=\s*(\{[\s\S]*?\});/;
    let response = fetch(url + '/');
    if (response.ok) {
        let text=response.text()
        let json=JSON.parse(text.match(regex)[1])
        let doc = Html.parse(text) 
         let des = doc.select(".blk:has(.fa-water) .blk-body").html();
         let _detail = ""
         doc.select(".blk-body.ib-100").forEach(e=>{
_detail+="<br>"+e.text()
         })
       
        //return Response.success(doc);
        return Response.success({
            name: json.name,
            cover: json.thumb,
            author: json.author || 'Unknow',
            description: des,
            detail: _detail,
            ongoing: true,
            host: URL_STV
        });
    }
    return null;
}