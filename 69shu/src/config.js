
let BASE_URL = JSON.parse(fetch('https://raw.githubusercontent.com/TuanHai03/vbook-extensions/main/Config_url').text())['69shu'];
console.log(BASE_URL)
  var host = BASE_URL;
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}
  let HOME_URL=BASE_URL+"/blist/class/0.htm"
try {
    
    if (HOME) {
        HOME_URL = HOME;
    }
} catch (error) {
}
  let TAG_URL=BASE_URL+"/blist/tags"
try {
    
    if (TAG) {
        TAG_URL = TAG;
    }
} catch (error) {
}