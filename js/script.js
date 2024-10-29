function openSidebar() {
  if (window.innerWidth <= 768) { // Only open sidebar for mobile
    document.getElementById("sidebar").style.width = "250px";
  }
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

setInterval(() => { changeSlide(1); }, 3000);
