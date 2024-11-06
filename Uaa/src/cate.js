load('config.js');

function execute(url, page) {
    if (!page) page = '1';
    let response = fetch(BASE_URL + url + "&page=" + page + "&size=40", {
        headers: {
            "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODYwNzIxNzA0MDMxMzU4OTc2LCJ0eXBlIjoiY3VzdG9tZXIiLCJ0aW1lc3RhbXAiOjE2ODUzNzg1MTE1NzQsImV4cCI6MTY4NTk4MzMxMX0.-FX7rOJP7I10ApjeM5NVaGj57aeYnkVyopniC7U_Dv8"
        }
    });
    if (response.ok) {
        let json = response.json();
        let ele = json.model.data;
        const data = [];
        ele.forEach(e => {
            data.push({
                name: e.title,
                link: "https://www.uaa.com/api/novel/app/novel/intro?id=" + e.id,
                cover: e.coverUrl,
                description: e.authors,
                host: BASE_URL
            });
        });
        let next = (parseInt(page) + 1).toString();
        return Response.success(data, next);
    }
    return null;
}