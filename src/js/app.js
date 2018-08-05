const btnWrpHeader = document.getElementById("content");
const btnWrp = document.getElementById("category__sort-show");
const btn = document.getElementById("sidebarCollapse");
const aside = document.querySelector(".categories-wrp .category");
const card = document.querySelectorAll(".card");
const header = document.querySelector(".categories-wrp .category__header");
const main = document.querySelector(".categories-wrp .category__main");
const placehold = document.querySelector(".placeholder-text-change");
const filter = document.querySelector(".category__sort-show");
window.addEventListener("resize", setPlaceholder, false);

btnWrp.addEventListener("click", hide, false);
btnWrpHeader.addEventListener("click", hide, false);

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
  Array.from(card, el => el.classList.toggle("card--fullscreen"))
  if (filter.textContent.toLowerCase() === "hide filters") {
    
    filter.textContent = "show filters";
  } else {
    filter.textContent = "hide filters";
  }
}
