load("config.js");
function execute(url) {
    let htm=""
   let response=fetch(url)
   let doc=response.html()
//    let text = doc.select(".bookname").text();
//    console.log(text)
// let regex = /（(\d+)\/(\d+)）/;
// let matches = text.match(regex);
// console.log(matches[2])
   htm=removeLastPIfContainsBaseUrl(doc.select(".content").html()).replace("这章没有结束，请点击下一页继续阅读！","")
   response=fetch(url.replace(".html", "_2.html"))
   doc=response.html()
   htm+=removeLastPIfContainsBaseUrl(doc.select(".content").html())
    return Response.success(htm);
}
function removeLastPIfContainsBaseUrl(text) {
    let matches = text.match(/<p>([\s\S]*?)<\/p>/g); // Thay `.` bằng `[\s\S]` để thay thế flag `s`
    if (matches && matches.length > 0) {
        let lastP = matches[matches.length - 1]; // Lấy thẻ <p> cuối cùng
        let lastPContent = lastP.replace(/<\/?p>/g, '').trim(); // Lấy nội dung trong thẻ <p>

        if (lastPContent.includes(BASE_URL.replace(/^https?:\/\/([^\/]+).*/, "$1"))) {
            return text.replace(lastP, ''); // Xóa thẻ <p> cuối cùng
        }
    }
    return text; // Trả về nội dung ban đầu nếu không cần xóa
}
