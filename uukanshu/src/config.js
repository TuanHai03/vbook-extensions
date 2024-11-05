let BASE_URL = JSON.parse(fetch('https://raw.githubusercontent.com/TuanHai03/vbook-extensions/main/Config_url').text())['Uukanshu'];
console.log(BASE_URL)
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}

