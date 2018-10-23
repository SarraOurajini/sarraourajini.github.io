//popup
setInterval( function (){
if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
}
} , 10000)
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
