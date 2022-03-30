function rolam() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/rolam.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function menu() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/menu.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function gepem() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:50vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}

// On Mobile
let mobilmenumegjelenit = 1; // változó, hogy ha mobilon a menüre kattintunk megjelenjen majd eltünjön
function gepemM() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:140vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function rolamM() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/rolam.html" style="width:100%;height:140vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
}
function mobilmenu(){
    if (mobilmenumegjelenit==1) {
    document.getElementById("mobilmenu").style.display = "block";
    mobilmenumegjelenit = 0;
    }
    else {
        document.getElementById("mobilmenu").style.display = "none";
        mobilmenumegjelenit=1;
    }
}