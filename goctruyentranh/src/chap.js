load('config.js');
function execute(url) {
    var doc = fetch(url);
    if (doc.ok) {
        doc=doc.html().select("main>div .w-full.block >div")
        console.log(doc)
        var imgs = doc.select("img");
        var data = [];
        for (var i = 0; i < imgs.size(); i++) {
            var e = imgs.get(i)
            data.push({link: e.attr("data-src")});
        }
        return Response.success(data);
    }
    return null;
}