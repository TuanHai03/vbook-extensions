load('config.js');
function execute(key,page) {
    if(!page) page = '1';
    let response = fetch("https://api.uaa.com/novel/app/novel/search?keyword=" + key + "&orderType=1&page=" + page + "&size=10");
    if (response.ok) {
        let json = response.json();
        let ele = json.model.data
        let books = [];
        ele.forEach(e => 
        {
            books.push({
                name: e.title,
                link: "https://www.uaa.com/api/novel/app/novel/intro?id=" + e.id,
                cover: e.coverUrl,
                description: e.authors,
                host: BASE_URL
            })
        });
        let next = (parseInt(page) + 1).toString();
        return Response.success(books,next);
    }

    return null;
}