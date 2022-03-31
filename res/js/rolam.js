document.getElementById("contact").onclick = function() {rolamview()};
let view = 1;
function rolamview() {if (view == 1) {
    document.getElementById("minicons").style.display = "block";view=0;}
    else {document.getElementById("minicons").style.display = "none";view=1;}}