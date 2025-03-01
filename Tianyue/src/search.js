load('config.js');

function execute(key, page) {
    let script=""
    if(!page){
       page=BASE_URL;
       script=`(function() {
        let searchInput = document.querySelector('input[name="searchkey"]');
        let searchButton = document.querySelector('.search button');

        if (searchInput && searchButton) {
            searchInput.value = '${key}'; // Sử dụng biến key để tìm kiếm
            searchInput.dispatchEvent(new Event("input", { bubbles: true }));
            searchInput.dispatchEvent(new Event("change", { bubbles: true }));

            setTimeout(() => {
                searchButton.click();
            }, 1000);
        }
    })();`;
   }
    var browser = Engine.newBrowser() // Khởi tạo browser
browser.setUserAgent(UserAgent.android()) // Tùy chỉnh user agent
browser.launch(page, 2000) 
browser.callJs(script, 2000) 
        let doc = browser.html();
        let rows = doc.select(".list li")
        let data=[]
        rows.forEach(e => {
            data.push({
                name: e.select(".bookname").text(),
                link: e.select("> a").attr("href"),
                description: e.select(".intro").text(),
                cover: e.select("img").first().attr("src"),
                host: BASE_URL
            })
        });
        console.log(doc.select(".pagelist a"))
        let next= BASE_URL+doc.select(".pagelist a").last().attr("href")
        return Response.success(data,next );
	
}