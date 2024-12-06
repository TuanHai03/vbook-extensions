
let BASE_URL = "https://www.69yuedu.net";
let HOME_URL=BASE_URL+"/articlelist/weekvisit_0_0_1.html";
  let TAG_URL=BASE_URL+"/articlelist/tags/";
console.log(BASE_URL)
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}
  
try {
    
    if (HOME) {
        HOME_URL = HOME;
    }
} catch (error) {
}

try {
    
    if (TAG) {
        TAG_URL = TAG;
    }
} catch (error) {
}
