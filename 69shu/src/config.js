
let BASE_URL = "https://69shuba.cx";
let HOME_URL=BASE_URL+"/blist/class/0.htm";
  let TAG_URL=BASE_URL+"/blist/tags";
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
