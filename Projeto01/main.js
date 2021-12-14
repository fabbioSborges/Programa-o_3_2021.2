const nav = document.querySelector("#header nav");
const chave = document.querySelectorAll("#header .chave");

for (const element of chave) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  ` 
  #servicos .card, #sobre .image`,
  { interval: 100 }
);
