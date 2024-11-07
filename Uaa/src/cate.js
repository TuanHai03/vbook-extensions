load('config.js');

function execute(input, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + "/novel/list?keyword=&searchType=1&author=&category=&finished=&space=&source=&tag="+input + "&sort=2&page=" + page + "&size=40");
    if (response.ok) {
        let doc= response.html();
        
        const data = [];
        
        doc.select(".main_box .novel_list_box ul li").forEach(e => {
            console.log(e)
            data.push({
                name: e.select(".title").text(),
                link: e.select(".cover_box a").attr('href'),
                cover: e.select(".cover_box a img").attr('src'),
                description: e.select(".info_box a").first().text(),
                
                host: BASE_URL
            });
        });
        let next = (parseInt(page) + 1).toString();
        return Response.success(data, next);
    }
    return null;
}