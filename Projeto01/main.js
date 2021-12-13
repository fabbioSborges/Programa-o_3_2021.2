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