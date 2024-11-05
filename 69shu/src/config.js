
let BASE_URL = JSON.parse(fetch('https://raw.githubusercontent.com/TuanHai03/vbook-extensions/main/Config_url').text())['69shu'];
console.log(BASE_URL)
  var host = BASE_URL;
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}