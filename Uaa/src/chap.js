load("config.js");
function execute(url) {

let body={
  method: "POST", // GET, POST, PUT, DELETE, PATCH
  headers: {
    "User-Agent": UserAgent.android()
  }
    }
if(BASE_COOKIE!=""){
    body={
  method: "POST", // GET, POST, PUT, DELETE, PATCH
  headers: {
    "cookie": BASE_COOKIE,
    "User-Agent": UserAgent.android()
  }
}
}
    let response = fetch(url,body);

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