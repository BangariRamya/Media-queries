document.getElementById("myBtn").onmouseover = function() {
    document.getElementById("myBtn").style.backgroundColor = "red";
    document.getElementById("myBtn").style.color = "white";
};
document.getElementById("myBtn").onmouseout = function() {
    document.getElementById("myBtn").style.backgroundColor = "white";
    document.getElementById("myBtn").style.color = "black";
};
document.getElementById("changeBg").onclick = function() {
    document.getElementById("sidebar").style.backgroundImage = "url('https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80')";
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("links").style.color = "white";
    document.getElementById("links1").style.color = "white";
    document.getElementById("links2").style.color = "white";
}

document.getElementById("changeBg5").onclick = function() {
    document.getElementById("sidebar").style.color = "white";
    document.getElementById("links").style.color = "white";
    document.getElementById("links1").style.color = "white";
    document.getElementById("links2").style.color = "white";
}


document.getElementById("changeBg2").onclick = function() {
    var color = prompt("Which color do you want?");
    document.getElementById("heading").style.backgroundColor = color;
}

document.getElementById("changeBg3").onclick = function() {
    document.getElementById("heading").style.fontSize = "50px";
}

document.getElementById("changeBg4").onclick = function() {
    document.getElementById("sidebar").classList.toggle("sidebar");
    alert("backgroundColor toggled");
}