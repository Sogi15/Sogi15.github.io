// menü onclick
function rolam() {
    document.getElementById("content").data='res/rolam.html';
    document.getElementById("home").style.display="none";
    document.getElementById("content").style.height='60vw';
    document.getElementById("menu_rolam").style.color = "orange";
    document.getElementById("menu_rolam").style.background = "linear-gradient(black 80%, red)";
    document.getElementById("menu_games").style.color = "";
    document.getElementById("menu_games").style.background = "";
}
function games() {
    document.getElementById("content").data='res/games.html';
    document.getElementById("home").style.display="none";
    document.getElementById("content").style.height='60vw';
    document.getElementById("menu_games").style.color = "orange";
    document.getElementById("menu_games").style.background = "linear-gradient(black 80%, red)";
    document.getElementById("menu_rolam").style.color = "";
    document.getElementById("menu_rolam").style.background = "";
}
function gepem() {
    document.getElementById("content").data='res/gepem.html';
    document.getElementById("content").style.height='45vw';
    document.getElementById("home").style.display="none";
    document.getElementById("menu_rolam").style.color = "";
    document.getElementById("menu_rolam").style.background = "";
    document.getElementById("menu_games").style.color = "";
    document.getElementById("menu_games").style.background = "";
}

// On Mobile
let mobilmenumegjelenit = 1; // változó, hogy ha mobilon a menüre kattintunk megjelenjen majd eltünjön
function gepemM() {
    document.getElementById("content").data='res/gepem.html';
    document.getElementById("home").style.display="none";
    document.getElementById("content").style.height='130vw';
    document.getElementById("menu_gepem").style.color = "orange";
    document.getElementById("menu_rolamM").style.color = "";
    document.getElementById("menu_gamesM").style.color = "";
}
function rolamM() {
    document.getElementById("content").data='res/rolam.html';
    document.getElementById("home").style.display="none";
    document.getElementById("content").style.height='100vw';
    document.getElementById("menu_gepem").style.color = "";
    document.getElementById("menu_rolamM").style.color = "orange";
    document.getElementById("menu_gamesM").style.color = "";
}
function gamesM() {
    document.getElementById("content").data='res/games.html';
    document.getElementById("home").style.display="none";
    document.getElementById("content").style.height='100vw';
    document.getElementById("menu_gepem").style.color = "";
    document.getElementById("menu_rolamM").style.color = "";
    document.getElementById("menu_gamesM").style.color = "orange";
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