load("config.js");
function execute(url) {
var browser = Engine.newBrowser() // Khởi tạo browser
browser.setUserAgent(UserAgent.android())
browser.launch(url,4000)
sleep(4000)
    let response = browser.html();
//console.log(response)
    if (response.select("body")!="") {
        let doc = response; // Xử lý trang HTML
        let content = "";
console.log(doc)
        // Lấy các phần tử có class 'line' và nối thành nội dung
        doc.select(".line").forEach(e => {
            content += e.text() + "<br>";
        });

        return Response.success(content);
    }
    return null;
}
