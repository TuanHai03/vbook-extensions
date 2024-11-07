function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html(); // Xử lý trang HTML
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
