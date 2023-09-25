const print = document.querySelector(".invoice-print");
const media = window.matchMedia("print");

const update = (e) => (print.style.display = e.matches ? "none" : "block");

function convert() {
  media.addEventListener("change", update, false);
  window.print();
}

print.addEventListener("click", convert, false);




