function execute(url) {
    let listImage=[]
    var newUrl = url.replace('gallery','g')
    var doc = Http.get(newUrl + "/1/").html()
    var image = doc.select("#gimg").attr("data-src")
    base_url=image.replace(/\/\d+(\.\w+)$/, '')
doc=fetch(url)
doc=doc.text().replace(/<!--[\s\S]*?-->/g, '')
doc=Html.parse(doc)
json=JSON.parse(doc.select("body>script").get(0).html().replace("var g_th = $.parseJSON('", "").replace("');", ""))
//console.log(json.length())
Object.entries(json).forEach(([key, value]) => {
  let domain = ".webp";  // Mặc định là ".webp"
  
  switch(value[0]) {
    case 'j':
      domain = ".jpg";
      break;  // Thêm break để dừng lại sau khi tìm thấy
    case 'p':
      domain = ".png";
      break;
    case 'g':
      domain = ".gif";
      break;
    default:
      domain = ".webp";  // Đây là trường hợp mặc định nếu không phải là 'j', 'p', 'g'
  }

  // Đẩy URL vào danh sách hình ảnh
  listImage.push(base_url + "/" + key + domain);
});
console.log(json['2'])
    return Response.success(listImage)
}