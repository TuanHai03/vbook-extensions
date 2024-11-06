function execute(url) {
    let response = fetch(url, {
        headers: {
            'User-Agent': 'NokiaN97/21.1.107 (SymbianOS/9.4; Series60/5.0 Mozilla/5.0; Profile/MIDP-2.1 Configuration/CLDC-1.1) AppleWebkit/525 (KHTML, like Gecko) BrowserNG/7.1.4',
            'cookie': 'token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODk0NzYyMTA4MDc0NDYzMjMyLCJ0eXBlIjoiY3VzdG9tZXIiLCJ0aW1lc3RhbXAiOjE3MjU5ODg0MzQ2NjksImV4cCI6MTcyNjU5MzIzNH0.TSIyaBB0Lo6w729Hdj7Kqj6R321eH-9e7dYPCBg6wF0;'
        }
    });

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
