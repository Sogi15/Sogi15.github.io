document.getElementById("contact_s").onclick = function() {rolamview()};
let view = 1;
function rolamview() {if (view == 1) {
    document.getElementById("minicons").style.display = "block";document.getElementById("contact_s").style.textDecoration = "underline red 0.4vw";view=0;}
    else {document.getElementById("minicons").style.display = "none";document.getElementById("contact_s").style.textDecoration = "";view=1;}}