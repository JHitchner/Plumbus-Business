// Home page

var floob =document.getElementById("floob");
var grodus =document.getElementById("grodus");
var chumble =document.getElementById("chumble");
var gromble =document.getElementById("gromble");
var flbBtn =document.getElementById("moused_flb")
var grdBtn =document.getElementById("moused_grd");
var chbBtn =document.getElementById("moused_chb");
var grbBtn =document.getElementById("moused_grb");


// Display click events for the differet parts of Plumbus
flbBtn.addEventListener("click", function() {
  floob.style.display = "block";
})
grdBtn.addEventListener("click", function() {
  grodus.style.display = "block";
})
chbBtn.addEventListener("click", function() {
  chumble.style.display = "block";
})
grbBtn.addEventListener("click", function() {
  gromble.style.display = "block";
})
