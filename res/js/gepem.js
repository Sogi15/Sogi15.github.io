// gépről kép kattintásra marad 
let view = 1;function rogstrix() {if (view == 1) {document.getElementById("rogstriximg").style.display="block";view = 0;}else {document.getElementById("rogstriximg").style.display="none";view = 1;}}
document.getElementById("rogstrix").onclick = function() {rogstrix()};
function rogstrixview() {if (view==1){document.getElementById("rogstriximg").style.display="none";}}
function rogstrixviewD() {if (view==0){document.getElementById("rogstriximg").style.display="none";}}
function rogstrixviewX() {if (view==0){document.getElementById("rogstriximg").style.display="block";}}
// hover képmegjelenítés az eszközöknél (logo)
document.getElementById("rogstrix").onmouseover = function() {document.getElementById("rogstriximg").style.display="block";};
document.getElementById("rogstrix").onmouseout = function() {rogstrixview()};
document.getElementById("nvidiartx").onmouseover = function() {document.getElementById("nvidiartxlogo").style.display="block";rogstrixviewD()};
document.getElementById("nvidiartx").onmouseout = function() {document.getElementById("nvidiartxlogo").style.display="none";rogstrixviewX()};
document.getElementById("ryzen").onmouseover = function() {document.getElementById("ryzenlogo").style.display="block";rogstrixviewD()};
document.getElementById("ryzen").onmouseout = function() {document.getElementById("ryzenlogo").style.display="none";rogstrixviewX()};
document.getElementById("micron").onmouseover = function() {document.getElementById("micronlogo").style.display="block";rogstrixviewD()};
document.getElementById("micron").onmouseout = function() {document.getElementById("micronlogo").style.display="none";rogstrixviewX()};
document.getElementById("samsung").onmouseover = function() {document.getElementById("samsunglogo").style.display="block";rogstrixviewD()};
document.getElementById("samsung").onmouseout = function() {document.getElementById("samsunglogo").style.display="none";rogstrixviewX()};
document.getElementById("wd").onmouseover = function() {document.getElementById("wdlogo").style.display="block";rogstrixviewD()};
document.getElementById("wd").onmouseout = function() {document.getElementById("wdlogo").style.display="none";rogstrixviewX()};
document.getElementById("fejhallgato").onmouseover = function() {document.getElementById("fejhallgatoimg").style.display="block";};
document.getElementById("fejhallgato").onmouseout = function() {document.getElementById("fejhallgatoimg").style.display="none";};
document.getElementById("eger").onmouseover = function() {document.getElementById("eger_egerpadimg").style.display="block";};
document.getElementById("eger").onmouseout = function() {document.getElementById("eger_egerpadimg").style.display="none";};
document.getElementById("egerpad").onmouseover = function() {document.getElementById("eger_egerpadimg").style.display="block";};
document.getElementById("egerpad").onmouseout = function() {document.getElementById("eger_egerpadimg").style.display="none";};
document.getElementById("kontroller1").onmouseover = function() {document.getElementById("kontroller1img").style.display="block";};
document.getElementById("kontroller1").onmouseout = function() {document.getElementById("kontroller1img").style.display="none";};
document.getElementById("kontroller2").onmouseover = function() {document.getElementById("kontroller2img").style.display="block";};
document.getElementById("kontroller2").onmouseout = function() {document.getElementById("kontroller2img").style.display="none";};
