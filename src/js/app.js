const btnWrp = document.getElementById("content");
const btn = document.getElementById("sidebarCollapse");
const aside = document.querySelector(".categories-wrp .category");
const header = document.querySelector(".categories-wrp .category__header");
const main = document.querySelector(".categories-wrp .category__main");
const placehold = document.querySelector(".placeholder-text-change");
window.addEventListener("resize", setPlaceholder, false);

btnWrp.addEventListener("click", hide, false);

function setPlaceholder() {
  if (document.documentElement.clientWidth < 860) {
    placehold.setAttribute("placeholder", "Search products ...");
  } else if (document.documentElement.clientWidth > 1380){
    placehold.setAttribute(
      "placeholder",
      "Search goods, suppliers and create your request..."
    );
  } else {
    placehold.setAttribute(
      "placeholder",
      "Search goods & suppliers..."
    );
  }
}
setPlaceholder()

function hide(e) {
  aside.classList.toggle("hide");
  header.classList.toggle("show");
  main.classList.toggle("show");
  btn.classList.toggle("active");
}
