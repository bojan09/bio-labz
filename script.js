var swiper = new Swiper(".gallery-projects", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger menu
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar-links");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

document.querySelectorAll(".navbar-links").forEach((link) =>
  link.addEventListener("click", () => {
    menuBtn.classList.toggle("remove");
    navbar.classList.toggle("remove");
  })
);
