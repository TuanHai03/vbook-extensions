load('config.js');

function execute(input, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + input, {
        headers: {
            "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODYwNzIxNzA0MDMxMzU4OTc2LCJ0eXBlIjoiY3VzdG9tZXIiLCJ0aW1lc3RhbXAiOjE2ODUzNzg1MTE1NzQsImV4cCI6MTY4NTk4MzMxMX0.-FX7rOJP7I10ApjeM5NVaGj57aeYnkVyopniC7U_Dv8"
        }
    });
    if (response.ok) {
        let doc= response.html();
        
        const data = [];
        
        doc.select(".main_box .popular_box .h_scroll_box ul li").forEach(e => {
            data.push({
                name: e.select(".title").text(),
                link: e.select(".cover_box a").attr('href'),
                cover: e.select(".cover_box a img").attr('src'),
                description: e.select(".author").first().text(),
                
                host: BASE_URL
            });
        });
        let next = (parseInt(page) + 1).toString();
        return Response.success(data, next);
    }
    return null;
}