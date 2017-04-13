// testimonial page

var antsModal =document.getElementById("test_antsModal");
var closeBtn =document.getElementById("close");
var testBtn =document.getElementById("test_nav");
// Modal function
function modalLoad(){
   antsModal.style.display = "block";
}
// Button close click event
closeBtn.addEventListener("click", function(){
  antsModal.style.display = "none";
})
// Set timer for modal popup
setTimeout(function () {
 modalLoad()
}, 3000);
