function execute(url) {
const regex = /var\s+g_th\s*=\s*\$\.parseJSON\(\s*'(\{[\s\S]*?\})'\s*\);/; 
    let listImage=[]
    var newUrl = url.replace('gallery','g')
    var doc = Http.get(newUrl + "/1/").html()
    var image = doc.select("#gimg").attr("data-src")
    base_url=image.replace(/\/\d+(\.\w+)$/, '')
doc=fetch(url)
//console.log(doc.text().match(regex)[1])
//return Response.success(doc.text().match(regex)[1])
json=JSON.parse(doc.text().match(regex)[1])
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