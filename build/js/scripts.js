"use strict";

var btnWrpHeader = document.getElementById("content");
var btnRTL = document.getElementById("chooseLangugeHeader");
var btnRTLfoot = document.getElementById("chooseLangugeFooter");
var rfqBtn = document.querySelector(".rfq-btn");
var rfqWrp = document.querySelector(".rfq-wrapper");
var btnWrp = document.getElementById("category__sort-show");
var rfqSbt = document.getElementById("rfq-submit");
var btn = document.getElementById("sidebarCollapse");
var aside = document.querySelector(".categories-wrp .category");
var card = document.querySelectorAll(".card");
// const firGroup = document.querySelectorAll(".checkbox-txt-after");
var header = document.querySelector(".categories-wrp .category__header");
var main = document.querySelector(".categories-wrp .category__main");
var placehold = document.querySelector(".placeholder-text-change");
var filter = document.querySelector(".category__sort-show");
window.addEventListener("resize", setPlaceholder, false);

btnWrp.addEventListener("click", hide, false);
btnWrpHeader.addEventListener("click", hide, false);
rfqBtn.addEventListener("click", setWfqWindow, false);
rfqSbt.addEventListener("click", getWfqWindow, false);
btnRTL.addEventListener("click", changeRTL, false);
btnRTLfoot.addEventListener("click", changeRTLfooter, false);

function changeRTLfooter() {
  console.log("ok");

  var strUser = btnRTLfoot.options[btnRTLfoot.selectedIndex].value;
  if (strUser == "arab") {
    document.body.style.direction = "rtl";
    // Array.from(firGroup, el => el.style.direction = "ltr")
    // console.log(btnRTL.document.querySelectorAll('option')[1]);

    // btnRTL.document.querySelectorAll('option')[1].selected = ''
    // btnRTL.document.querySelectorAll('option')[0].selected = 'selected'
  } else {
    // console.log(btnRTL.document.querySelectorAll('option')[1]);
    document.body.style.direction = "ltr";
    // btnRTL.document.querySelectorAll('option')[1].selected = ''
    // btnRTL.document.querySelectorAll('option')[0].selected = 'selected'
  }
}
function changeRTL() {
  var strUser = btnRTL.options[btnRTL.selectedIndex].value;
  if (strUser == "arab") {
    document.body.style.direction = "rtl";
  } else if (strUser === "en") {
    document.body.style.direction = "";
    btnRTL.document.querySelectorAll('option')[1].selected = '';
    btnRTL.document.querySelectorAll('option')[0].selected = 'selected';
  }
}

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