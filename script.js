var i = 0;
var time = 3000;
var images = ["1.jpg","2.jpg","3.jpg","4.jpg"];

function imageSlider() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } 
  else {
    i = 0;
  }
  
  setTimeout('imageSlider()' , time)
}
window.onload = imageSlider;
