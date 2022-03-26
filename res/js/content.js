function rolam() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/rolam.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function menu() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/menu.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function gepem() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:30vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}

// On Mobile
function gepemM() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:50vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}