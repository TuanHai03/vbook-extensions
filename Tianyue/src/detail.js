load("config.js");
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        return Response.success({
            name: doc.select(".detail .name").text(),
            cover: doc.select(".detail img").attr("src"),
            author: doc.select(".detail .author a").text(),
            description: doc.select(".intro").html(),
            host: BASE_URL,
        });
    }
    return null;
}