var pictureIndex = 1;
showPictures(pictureIndex);

function plusPictures(n) {
  showPictures(pictureIndex += n);
}

function currentPictures(n) {
  showPictures(pictureIndex = n);
}

function showPictures(n) {
  var i;
  var pictures = document.getElementsByClassName("pics");
  if (n > pictures.length) {pictureIndex = 1}
  if (n < 1) {pictureIndex = picture.length}
  for (i = 0; i < pictures.length; i++) {
      pictures[i].style.display = "none";
  }
  pictures[pictureIndex-1].style.display = "block";
}
