load("config.js");
function execute(key, page) {
    
    const stv_url=JSON.parse(fetch("https://raw.githubusercontent.com/sangtacviet/sangtacviet.github.io/main/update.json").text())['domain']
    
    url=stv_url+"/?find=&findinname="+key+"&host=69shu&minc=0&tag="
    var response = fetch(url)
    if (response.ok) {
        let doc = response.html();
        let novelList = [];
        let next = doc.select("ul.pagination > li > a").last().attr("href").match(/page=(\d+)/);
        if (next) next = next[1]; else next = '';
        console.log(doc.select("#searchviewdiv .row a"))
        doc.select("#searchviewdiv .row .booksearch").forEach(e => {
            if(check69shu(e.attr("href"))){
novelList.push({
                name: e.select(".searchbooktitle").text(),
                link: "https://69shu.biz/b/"+getbookid(e.attr("href"))+".html",
                description: e.select(".searchbookauthor").text(),
                host: BASE_URL
            });
            }
            
        });

        return Response.success(novelList, next);
    }

    return null;
}
function getbookid(url){
    
return url.split('/')[4];
}
function check69shu(url){
if(url.split('/')[2]=="69shu"){
return true;
}
return false;
}
