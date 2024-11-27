let BASE_URL = 'https://www.uaa.com';
let BASE_COOKIE="";
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}
try {
    if (COOKIE) {
        BASE_COOKIE = COOKIE;
    }
} catch (error) {
}