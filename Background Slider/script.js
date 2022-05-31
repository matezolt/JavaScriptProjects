const body = document.body;
const slides = document.querySelectorAll(".slide"); //node list
const leftBtn = document.getElementById("left");
const righttBtn = document.getElementById("right");

let activeSlide = 0;

righttBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgtoBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgtoBody();
  setActiveSlide();
});

setBgtoBody();

function setBgtoBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");

    slides[activeSlide].classList.add("active");
  });
}
