load('config.js');

function execute(url) {
    const regex = /(?:item_id=|\/)(\d+)$/;
    let chapid = url.match(regex)[1]
    let chapterUrl = "https://novel.snssdk.com/api/novel/reader/full/v1/?item_id=" + chapid;
    let response_chapter_info = fetch(chapterUrl)
    if (response_chapter_info.ok) {
        let json = response_chapter_info.json();
        let chapter_info = json.data.content.replace(/<br\s*\/?>|\n/g, "<br><br>");
        return Response.success(chapter_info);
    }
    return null;
}
