// const btnWrpHeader = document.getElementById("content");
const btnRTL = document.getElementById("chooseLangugeHeader");
const btnRTLfoot = document.getElementById("chooseLangugeFooter");
const rfqBtn = document.querySelector(".rfq-btn");
const rfqWrp = document.querySelector(".rfq-wrapper");
const btnWrp = document.getElementById("category__sort-show");
const rfqSbt = document.getElementById("rfq-submit");
const btn = document.getElementById("sidebarCollapse");
const aside = document.querySelector(".categories-wrp .category");
const card = document.querySelectorAll(".card");
const header = document.querySelector(".categories-wrp .category__header");
const main = document.querySelector(".categories-wrp .category__main");
const placehold = document.querySelector(".placeholder-text-change");
const filter = document.querySelector(".category__sort-show");
window.addEventListener("resize", setPlaceholder, false);


const categoryDirection = document.querySelector('.category-direction')
rfqBtn.addEventListener("click", setWfqWindow, false);
rfqSbt.addEventListener("click", getWfqWindow, false);
btnRTL.addEventListener("click", changeRTL, false);
btnRTLfoot.addEventListener("click", changeRTLfooter, false);

function changeRTLfooter () {
  console.log("ok");
  
  const strUser = btnRTLfoot.options[btnRTLfoot.selectedIndex].value;
  if ( strUser == "arab") {
    changeRTL ()
  } else  {
    toLTR ()
  }

}
function changeRTL () {
  const strUser = btnRTL.options[btnRTL.selectedIndex].value;
  if ( strUser == "arab") {
    toRTL ()
  } else {
    toLTR ()
  }
}

function toLTR () {
  document.body.style.direction = "ltr";
  categoryDirection.classList.remove('rtr')
  categoryDirection.classList.add('ltr')
}

function toRTL () {
  document.body.style.direction = "rtl";
    categoryDirection.classList.remove('ltr')
    categoryDirection.classList.add('rtl')
}

function setWfqWindow (e) {
  e.preventDefault();
  rfqWrp.style.top = "50%";
  rfqWrp.style.opacity = "1";
}
function getWfqWindow (e) {
  e.preventDefault();
  rfqWrp.style.top = "-4000px";
  rfqWrp.style.opacity = "0";
}


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




$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})