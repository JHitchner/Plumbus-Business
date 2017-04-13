var backward = document.getElementById("prev");
var forward = document.getElementById("next");
var myArray = document.getElementsByClassName("pics");
var pictureIndex = 0;

backward.addEventListener("click", function(event) {
  myArray[pictureIndex].style.display = "none";
  pictureIndex--;
  if(pictureIndex < 0) {
    pictureIndex = 6;
  };
  myArray[pictureIndex].style.display = "block";
})
forward.addEventListener("click", function(event) {
  myArray[pictureIndex].style.display = "none";
  pictureIndex++;
  if(pictureIndex > 6) {
    pictureIndex = 0;
  };
  myArray[pictureIndex].style.display = "block";
});
