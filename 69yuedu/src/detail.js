load('libs.js');
load('config.js');

function execute(url) {
    var gbkEncode = function(s) {
        load('gbk.js');
        return GBK.encode(s);
    }
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    url = url.replace("/txt/","/book/")
    console.log(url)
    let response = fetch(url);
    console.log(response.ok)
    if (response.ok) {
        let doc = response.html('gbk');
console.log(doc)
        return Response.success({
            name: $.Q(doc, 'div.booknav2 > h1 > a').text(),
            cover: $.Q(doc, 'div.bookimg2 > img').attr('src'),
            author: $.Q(doc, 'div.booknav2 > p').text().replace("作者：", ""),
            description: doc.select(".jianjie-popup .content").text(),
            detail: $.QA(doc, 'div.booknav2 p', {m: x => x.text(), j: '<br>'}),
            suggests:[{title:"Cùng tác giả",input:"/modules/article/author.php?author="+gbkEncode($.Q(doc, 'div.booknav2 > p').text().replace("作者：", "")),script:"suggest.js"}],
            host: BASE_URL
        })
    }
    return null;
}