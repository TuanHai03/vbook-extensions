load('config.js')

function execute(url) {
    let response = fetch(url, {
        headers: {
            "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6ODYwNzIxNzA0MDMxMzU4OTc2LCJ0eXBlIjoiY3VzdG9tZXIiLCJ0aW1lc3RhbXAiOjE2ODUzNzg1MTE1NzQsImV4cCI6MTY4NTk4MzMxMX0.-FX7rOJP7I10ApjeM5NVaGj57aeYnkVyopniC7U_Dv8"
        }
    });let data=[]
    if (response.ok) {

        let doc = response.html();
        //console.log(json)
        
        let chapters=doc.select(".catalog_box .catalog_ul li")
        chapters.forEach(e => {
        console.log(e)
        data.push({
            name: e.select("a").first().text(),
            url: e.select("a").first().attr("href"),
            
        })
        
    })
        
        return Response.success(data);
       
    }
    return null;
}

