"use strict";

var btnWrpHeader = document.getElementById("content");
var rfqBtn = document.querySelector(".rfq-btn");
var rfqWrp = document.querySelector(".rfq-wrapper");
var btnWrp = document.getElementById("category__sort-show");
var rfqSbt = document.getElementById("rfq-submit");
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
rfqBtn.addEventListener("click", setWfqWindow, false);
rfqSbt.addEventListener("click", getWfqWindow, false);

function setWfqWindow(e) {
  e.preventDefault();
  rfqWrp.style.top = "50%";
  rfqWrp.style.opacity = "1";
}
function getWfqWindow(e) {
  e.preventDefault();
  rfqWrp.style.top = "-4000px";
  rfqWrp.style.opacity = "0";
}

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