var modal = document.getElementById("myModal");

var btn = document.getElementById("modalBtn");

var span = document.getElementById("close");

//var span = document.getElementsByClassName("close")[0]; //nulle norāda pirmo elementu grupā

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}