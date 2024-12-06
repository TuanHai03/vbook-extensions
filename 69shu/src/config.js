
let BASE_URL = "https://www.69yuedu.net";
let HOME_URL=BASE_URL+"/blist/class/0.htm";
  let TAG_URL=BASE_URL+"/blist/tags";
  let CONTENT_TXT=".txtnav"
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
try {
    
    if (CONTENT) {
        CONTENT_TXT = CONTENT;
    }
} catch (error) {
}