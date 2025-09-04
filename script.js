const body = document.body;
const desktopMediaQuery = window.matchMedia("(min-width: 758px)");
const mobileMediaQuery = window.matchMedia("(min-width: 320px)");

let modal = document.getElementById("modal");
let hamburger = document.getElementById("hamburger");
let close = document.getElementById("close");
hamburger.onclick = function () {
  modal.style.display = "block";
};
close.onclick = function () {
  modal.style.display = "none";
};

const slide = [
  {
    title: "Discover innovative ways to decorate",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "We are available all across the globe",
    content:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    content:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];
const background = [
  {
    desktop: "url('images/desktop-image-hero-1.jpg')",
    mobile: "url('images/mobile-image-hero-1.jpg')",
  },
  {
    desktop: "url('images/desktop-image-hero-2.jpg')",
    mobile: "url('images/mobile-image-hero-2.jpg')",
  },
  {
    desktop: "url('images/desktop-image-hero-3.jpg')",
    mobile: "url('images/mobile-image-hero-3.jpg')",
  },
];

let currentIndex = 0;
function updateSlide() {
  document.getElementById("title").textContent = slide[currentIndex].title;
  document.getElementById("para-text").textContent = slide[currentIndex].content;
  if (desktopMediaQuery.matches) {
    document.getElementById("page-one").style.backgroundImage = background[currentIndex].desktop;
  } else if (mobileMediaQuery.matches) {
    document.getElementById("page-one").style.backgroundImage = background[currentIndex].mobile;
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlide();
}
