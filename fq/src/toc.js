load('config.js');


function execute(url) {
    const regex = /(?:book_id=|\/)(\d+)(?:\?|$)/;
    let book_id = url.match(regex)[1]
    const book = [];
    if(BASE_CHECK||url.includes("sangtacviet"))
    {
        let stv_url=fetch("https://raw.githubusercontent.com/sangtacviet/sangtacviet.github.io/main/update.json");
        if(stv_url.ok)
        {
            stv_url=stv_url.json().domain
            let toc=fetch(stv_url+"/index.php?ngmar=chapterlist&h=fanqie&bookid="+book_id+"&sajax=getchapterlist",
            {
                method: "GET", // GET, POST, PUT, DELETE, PATCH
                headers: {"Referer": stv_url+"/app.v2.php"}
            })
            if(toc.ok){
            const rawChapters = toc.json().oridata.split("-//-");
            rawChapters.map(chapter => {
            const parts = chapter.split("-/-");
            book.push(
                {
                    name:parts[2],
                    url: BASE_URL + "/reader/" + parts[1],
                host: BASE_URL
                }
            )
            })
            return Response.success(book)
            }
        }
    }
    let newurl = `https://fanqienovel.com/page/${book_id}`
    console.log(newurl)
    
	let response = fetch(newurl);
    if (response.ok) {
        let doc = response.html();
        
        let el = doc.select(".page-directory-content a.chapter-item-title")


        for (var i =0; i < el.size(); i++) {
            var e = el.get(i);
            book.push({
                name: e.text(),           
                url: BASE_URL + "" + e.attr("href"),
                host: BASE_URL
            })
        }
        return Response.success(book);
    }
    return null;
}
