load('config.js');
function execute(url) {
   var browser = Engine.newBrowser() // Khởi tạo browser
browser.setUserAgent(UserAgent.android()) // Tùy chỉnh user agent
browser.launch(url, 1000)
const script = `
    (function() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        return 'Đã kéo xuống cuối trang';
    })();
`;
 browser.callJs(script, 1000);
 console.log(browser.html())
var imgs = browser.html().select("main .image-section img");
        var data = [];
        console.log(imgs.length)
        imgs.forEach(e=>{
            image=BASE_URL+e.attr("src")
            const regex = /https:\/\/[^\s]+/g; // Biểu thức tìm tất cả các URL bắt đầu bằng http
const matches = e.attr("src").match(regex);
            if(matches){
                image=e.attr("src")
            }
             data.push({
                referer:url,
                link: image
  })
        })
        return Response.success(data);
 }


 
 
