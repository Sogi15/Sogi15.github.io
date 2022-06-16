document.getElementById("q1").onclick = function () {
    document.getElementById("answer").innerHTML = "Ezt az információt nem árulom el egyenlőre. <br>A kilétem egyenlőre titok marad!<br>Annyit elárulok DémonMesteR vagyok!";
    document.getElementById("q1").style.color = "darkred";
    document.getElementById("q3").style.color = "";
    document.getElementById("q2").style.color = "";
    document.getElementById("q5").style.color = "";
    document.getElementById("q4").style.color = "";

};
document.getElementById("q2").onclick = function () {
    document.getElementById("answer").innerHTML = "Sajnos ez a kérdés eléggé személyes, ezért nem fogok rá válaszolni. <br>A nevem illetve lakóhelyem egy olyan dolog ami szerintem nem a nyilvánosság elé tárható információ!";
    document.getElementById("q2").style.color = "darkred";
    document.getElementById("q3").style.color = "";
    document.getElementById("q1").style.color = "";
    document.getElementById("q5").style.color = "";
    document.getElementById("q4").style.color = "";

};
document.getElementById("q3").onclick = function () {
    document.getElementById("answer").innerHTML = "1999-ben születtem szóval nagyjából ki lehet számolni hány éves vagyok! <br> A pontos születési dátumom nem publikus így kérlek ezzel kapcsolatban ne is írj!";
    document.getElementById("q4").style.color = "";
    document.getElementById("q3").style.color = "darkred";
    document.getElementById("q2").style.color = "";
    document.getElementById("q5").style.color = "";
    document.getElementById("q1").style.color = "";
};
document.getElementById("q4").onclick = function () {
    document.getElementById("answer").innerHTML = "Még Counter-Strike 1.6-al játszottam amikor láttam, hogy midenkinek milyen menő kitalált neve van. Azután, hogy olvastam Darren Shan Démonvilág könyveit kitaláltam, hogy az első kötet után kreálok egy nevet ami az első kötet címe lett lényegében csak kis nagybetük szórakozásával. Tehát Démonmester volt a könyv címe és így jött létre a DémonMesteR játékos név.";
    document.getElementById("q4").style.color = "darkred";
    document.getElementById("q3").style.color = "";
    document.getElementById("q2").style.color = "";
    document.getElementById("q1").style.color = "";
    document.getElementById("q5").style.color = "";
};
document.getElementById("q5").onclick = function () {
    document.getElementById("answer").innerHTML = "Nos igen ez egy nagyon jó kérdés! Igazából mindig is érdekelt ez a téma, van néhány jó pillanatom és ezeket szeretném megosztani veletek. Ez amolyan emlék tárház is. Remélem lesz akit megfog ez az egész.";
    document.getElementById("q5").style.color = "darkred";
    document.getElementById("q4").style.color = "";
    document.getElementById("q3").style.color = "";
    document.getElementById("q2").style.color = "";
    document.getElementById("q1").style.color = "";
};

document.getElementById("contact_s").onclick = function() {rolamview()};
let view = 1;
function rolamview() {if (view == 1) {
    document.getElementById("minicons").style.display = "block";document.getElementById("contact_s").style.textDecoration = "underline red 0.4vw";view=0;}
    else {document.getElementById("minicons").style.display = "none";document.getElementById("contact_s").style.textDecoration = "";view=1;}}