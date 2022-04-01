document.getElementById("q1").onclick = function() {
    document.getElementById("answer").innerHTML = "Ezt az információt nem árulom el egyenlőre. <br>A kilétem egyenlőre titok marad!";
    document.getElementById("q1").style.color = "darkred";
    document.getElementById("q3").style.color = "";
    document.getElementById("q2").style.color = "";};
document.getElementById("q2").onclick = function() {
    document.getElementById("answer").innerHTML = "Sajnos ez a kérdés eléggé személyes, ezért nem fogok rá válaszolni. <br>A nevem illetve lakóhelyem egy olyan dolog ami szerintem nem a nyilvánosság elé tárható információ!";
    document.getElementById("q2").style.color = "darkred";
    document.getElementById("q3").style.color = "";
    document.getElementById("q1").style.color = "";};
    document.getElementById("q3").onclick = function() {
        document.getElementById("answer").innerHTML = "1999-ben születtem szóval nagyjából ki lehet számolni hány éves vagyok! <br> A pontos születési dátumom nem publikus így kérlek ezzel kapcsolatban ne is írj!";
        document.getElementById("q3").style.color = "darkred";
        document.getElementById("q2").style.color = "";
        document.getElementById("q1").style.color = "";};


document.getElementById("contact_s").onclick = function() {rolamview()};
let view = 1;
function rolamview() {if (view == 1) {
    document.getElementById("minicons").style.display = "block";document.getElementById("contact_s").style.textDecoration = "underline red 0.4vw";view=0;}
    else {document.getElementById("minicons").style.display = "none";document.getElementById("contact_s").style.textDecoration = "";view=1;}}