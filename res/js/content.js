// menü onclick
function rolam() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/rolam.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
    document.getElementById("menu_rolam").style.color = "orange";
    document.getElementById("menu_rolam").style.background = "linear-gradient(black 80%, red)";
    document.getElementById("menu_test").style.color = "";
    document.getElementById("menu_test").style.background = "";
}
function menu() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/menu.html" style="width:100%;height:25vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
    document.getElementById("menu_test").style.color = "orange";
    document.getElementById("menu_test").style.background = "linear-gradient(black 80%, red)";
    document.getElementById("menu_rolam").style.color = "";document.getElementById("menu_rolam").style.background = "";
}
function gepem() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:50vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
    document.getElementById("menu_rolam").style.color = "";document.getElementById("menu_rolam").style.background = "";
    document.getElementById("menu_test").style.color = "";
    document.getElementById("menu_test").style.background = "";
}

// On Mobile
let mobilmenumegjelenit = 1; // változó, hogy ha mobilon a menüre kattintunk megjelenjen majd eltünjön
function gepemM() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/gepem.html" style="width:100%;height:140vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
    document.getElementById("menu_gepem").style.color = "orange";
    document.getElementById("menu_rolamM").style.color = "";
}
function rolamM() {
    document.getElementById("content").innerHTML='<object type="text/html" data="res/rolam.html" style="width:100%;height:140vw;"></object>';
    document.getElementById("home").innerHTML="<style>span#home {display:none;}</style>";
    document.getElementById("menu_gepem").style.color = "";
    document.getElementById("menu_rolamM").style.color = "orange";
}
function mobilmenu(){
    if (screen.width <= 768)
    {
    if (mobilmenumegjelenit==1) {
        document.getElementById("mobilmenu").style.display = "block";mobilmenumegjelenit = 0;
        document.getElementById("mobilmenuclick").style.color = "orange";}
        else {document.getElementById("mobilmenu").style.display = "none";mobilmenumegjelenit=1;document.getElementById("mobilmenuclick").style.color = "white";}
    }
    else {document.getElementById("mobilmenu").style.display = "none";}
}