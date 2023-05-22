// Megan M Boyer - CSC256 Slideshow Assignment - 5/18/2023

// Declare new int variable called 'slideIndex' and set its value to 1.
let slideIndex = 1;
// Declare new function called showSlides that takes slideIndex as an argument.
showSlides(slideIndex);

// Next/previous controls
/* Declare new function called 'plusSlides' that takes argument n. The body of this function runs the 'showSlides' 
function and sets the value of slideIndex to its current value plus the value of n.*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// Declare new function called 'currentSlide' that takes argument n.
function currentSlide(n) {
  // The body of this function runs the 'showSlides' function and sets slideIndex equal to n'
  showSlides(slideIndex = n);
}

// Run showSlides function with argument n.
function showSlides(n) {
  // Declare new variable 'i'
  let i;
  // Declare new variable 'slides' and set it equal to the element with class 'slide' in the HTML.
  let slides = document.getElementsByClassName("slide");
  //Declare new variable 'dots' and set it equal to the element with class 'dots' in the HTML.
  let dots = document.getElementsByClassName("dot");
  // If the slide index is greater than the number of slides, set the slide index to 1/go back to the first slide.
  if (n > slides.length) {slideIndex = 1}
  // If the slide index is less than one, set the slide index equal to the number of slides (go to slide 8).
  if (n < 1) {slideIndex = slides.length}
  // Set variable 'i' = 0, if 'i' is less than the number of slides (8), increment 'i'.
  for (i = 0; i < slides.length; i++) {
    // because 'i' is less than the slide length (8), it will increment up to 8 and hide the other slides while doing so.
    slides[i].style.display = "none";
  }
  // Set variable 'i' equal to zero, if 'i' is less than the number of dots (8), increment 'i'.
  for (i = 0; i < dots.length; i++) {
    // Each dot's class switches to active when iterated over by for loop one at a time.
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Display the current slide as a block element.
  slides[slideIndex-1].style.display = "block";
  // Make the dot of the current slide change to class 'active.'
  dots[slideIndex-1].className += " active";
}