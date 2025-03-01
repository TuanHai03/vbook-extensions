let BASE_URL="http://192.168.1.8:9777"
let GIT_STV="https://raw.githubusercontent.com/sangtacviet/sangtacviet.github.io/main/update.json"
let URL_STV=fetch(GIT_STV).json().domain
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
    
} catch (error) {
}