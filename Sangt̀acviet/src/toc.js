load("config.js");
function execute(url) {
    var book=[]
    //https://sangtacviet.app/index.php?ngmar=chapterlist&h=69shu&bookid=87248&sajax=getchapterlist
    const regex = /truyen\/([^\/]+)\/\d+\/(\d+)\/?/;   
    let input = url.match(regex)
    urls=URL_STV+"/index.php?ngmar=chapterlist&sajax=getchapterlist&h="+input[1]+"&bookid="+input[2]
    let response= fetch(urls,{
        method:"GET",
        headers:{
            "x-stv-transport":	"web",
"user-agent":"Mozilla/5.0 (Linux; Android 7.1.2; M2101K7BG Build/N2G47H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/81.0.4044.117 Mobile Safari/537.36",
"referer":	"https://sangtacviet.app/app.v2.php"
        }
    })
    
    console.log(URL_STV+"/index.php?ngmar=chapterlist&sajax=getchapterlist&h="+input[1]+"&bookid="+input[2])
    if(response.ok){
        let books=response.json()
           let toc=books.data
          // return Response.success(toc);
    const regex1 = /1-\/-(\d+)-\/-([^\/]+)/;
    const chapters = [];
toc.split('-//-').forEach(e=>{
chapters.push({
    url:"/?bookid="+input[2]+"&c="+e.match(regex1)[1]+"&h="+input[1],
    name:e.match(regex1)[2],
host :BASE_URL
})
})
        return Response.success(chapters);
    }
        return Response.success({
            name: "error",
                url: BASE_URL,
        });

}