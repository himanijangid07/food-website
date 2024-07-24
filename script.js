let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

let btn = document.getElementById('btn1');

function openbtn() {
  let page = document.getElementById('para');
  page.style.display = "grid";
  let close = document.getElementByIdName('first');
  close.style.display = "none";
}

function openbtn1() {
  let close1 = document.getElementByIdName("para1");
  close1.style.display = "grid";
  page.style.display = "none";
}

function openbtn2() {

}