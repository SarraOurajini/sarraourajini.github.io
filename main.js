/*if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
  window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}*/
// Ajout du popup
confirmation = () => {
  window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};
removeDiv = () => {
  document.getElementById("popup").remove();
};
setTimeout(function() {
  document.getElementById("popup").remove();
}, 10000);
document.getElementById("popup").innerHTML =
  `<h3>Hey le site xxxvidsxxx est trop bien. Viens dessus stp please</h3>` +
  `<button class="button"onclick= confirmation()>Aller vers ce site</button> <button class="button" onclick=removeDiv()>Rester sur ce site</button>`;

// changement du style par le boutton Mode
document.getElementById("modeButton").addEventListener("click", function() {
  document.querySelector("html").style.backgroundColor = "magenta";

  let arrayP = document.getElementsByTagName("p");
  for (i = 0; i < arrayP.length; i++) {
    arrayP[i].style.color = "blue";
    arrayP[i].style.fontFamily = "papyrus";
  }
  let arrayh = document.querySelectorAll("h1, h2, h3, h4");
  for (i = 0; i < arrayh.length; i++) {
    arrayh[i].style.color = "green";
    arrayh[i].style.fontFamily = "Comic Sans";
  }
});
