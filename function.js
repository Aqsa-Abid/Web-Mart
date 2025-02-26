// Slider bar on second section to show top rated Products
// let gallary = document.querySelector(".gallary");
// let back = document.getElementById("previous");
// let next = document.getElementById("next");

// gallary.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     gallary.scrollLeft += evt.deltaY;
//     gallary.style.scrollBehavior = "auto";
// });
// next.addEventListener("click", () => {
//     gallary.style.scrollBehavior = "smooth";
//     gallary.scrollLeft += 900;
// });
// back.addEventListener("click", () => {
//     gallary.style.scrollBehavior = "smooth";
//     gallary.scrollLeft -= 900;
// });
let gallary = document.querySelector(".gallary");
let back = document.getElementById("previous");
let next = document.getElementById("next");

// Function to move slides
function moveSlide(direction) {
    gallary.style.scrollBehavior = "smooth";
    gallary.scrollLeft += direction * 900;
    resetAutoSlide();
}

// Event listeners for manual navigation
next.addEventListener("click", () => moveSlide(1));
back.addEventListener("click", () => moveSlide(-1));

// Auto slide function
function autoSlide() {
    moveSlide(1);
}

// Auto-slide every 3 seconds
let autoSlideInterval = setInterval(autoSlide, 3000);

// Reset timer when manually clicking
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(autoSlide, 3000);
}


// Testimonials Slider for Section 6 to show reviews
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Background Slider on home Screen automatic Slider

var slideimage = document.getElementById("slideimage");
//  to store imges 
var images = new Array (
   "images/slide 1.jpeg", 
   "images/slide 2.jpeg", 
   "images/slide 3.jpeg", 
   "images/slide 4.jpeg", 
   "images/slide 5.jpeg"
  ); 
  var len = images.length;
  var i = 0;
  function slider(){
  if( i > len-1){
    i = 0;
  }
  slideimage.src = images[i];
  i++;
  setTimeout('slider()',3000);
}


// Sub Menu JavaScript to show a DropDown Menu For category option

let subMenu = document.getElementById("sub-Menu");
function toggleMenu(){
  subMenu.classList.toggle("open");
}