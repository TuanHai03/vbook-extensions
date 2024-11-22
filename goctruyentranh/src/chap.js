poload('config.js');
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
             data.push({
                referer:url,
                link: BASE_URL+e.attr("src")
  })
        })
        return Response.success(data);
 }


 
 
