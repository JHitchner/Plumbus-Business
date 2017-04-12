var antsModal =document.getElementById("test_antsModal");
var closeBtn =document.getElementById("close");
var testBtn =document.getElementById("test_nav");

function modalLoad(){
   antsModal.style.display = "block";
}
closeBtn.addEventListener("click", function(){
  antsModal.style.display = "none";
})

modalLoad()
