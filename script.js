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

function openbtn() {
  let veggies = document.getElementById("veggies");
  veggies.style.display = "grid";
  let close = document.getElementById('fresh');
  close.style.display = "none";
  let close1 = document.getElementById("fresh1");
  close1.style.display = "none";
}

function openbtn1() {
  veggies.style.display = "none";
  let fruits = document.getElementById("fruits");
  fruits.style.display = "grid";
  close = document.getElementById('fresh');
  close.style.display = "none";
  close1 = document.getElementById("fresh1");
  close1.style.display = "none";
}

function openbtn2() {
  veggies.style.display = "none";
  fruits.style.display = "none";
  close.style.display = "grid";
  close1.style.display = "grid";
}