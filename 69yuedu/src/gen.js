load('libs.js');
load('config.js');

function execute(url, page) {
    page = page || '1';
    url = String.format(BASE_URL + url, page);
    console.log(url)
    // log(url);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        var data = [];
        //console.log(doc)
        var elems = doc.select(".container>.mybox .listright .newbox>ul li")
        console.log(elems)
        if (!elems.length) return Response.error(url);
        elems.forEach(e=> {
            data.push({
                name:e.select('.newnav h3 > a:not([class])').text().trim(),
                link: e.select('h3 > a').attr('href'),
                description:e.select('ol').text().replace('最近章节', ''),
                host: BASE_URL
            })
        })
        var next = parseInt(page, 10) + 1;
        return Response.success(data, next.toString());
    }
    return null;
}