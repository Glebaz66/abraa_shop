"use strict";

var btnWrpHeader = document.getElementById("content");
var btnWrp = document.getElementById("category__sort-show");
var btn = document.getElementById("sidebarCollapse");
var aside = document.querySelector(".categories-wrp .category");
var card = document.querySelectorAll(".card");
var header = document.querySelector(".categories-wrp .category__header");
var main = document.querySelector(".categories-wrp .category__main");
var placehold = document.querySelector(".placeholder-text-change");
var filter = document.querySelector(".category__sort-show");
window.addEventListener("resize", setPlaceholder, false);

btnWrp.addEventListener("click", hide, false);
btnWrpHeader.addEventListener("click", hide, false);

function setPlaceholder() {
  if (document.documentElement.clientWidth < 860) {
    placehold.setAttribute("placeholder", "Search products ...");
  } else if (document.documentElement.clientWidth > 1380) {
    placehold.setAttribute("placeholder", "Search goods, suppliers and create your request...");
  } else {
    placehold.setAttribute("placeholder", "Search goods & suppliers...");
  }
}
setPlaceholder();

function hide(e) {
  aside.classList.toggle("hide");
  header.classList.toggle("show");
  main.classList.toggle("show");
  btn.classList.toggle("active");
  Array.from(card, function (el) {
    return el.classList.toggle("card--fullscreen");
  });
  if (filter.textContent.toLowerCase() === "hide filters") {

    filter.textContent = "show filters";
  } else {
    filter.textContent = "hide filters";
  }
}