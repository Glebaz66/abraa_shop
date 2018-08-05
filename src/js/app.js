const btnWrpHeader = document.getElementById("content");
const btnRTL = document.getElementById("chooseLangugeHeader");
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

btnWrp.addEventListener("click", hide, false);
btnWrpHeader.addEventListener("click", hide, false);
rfqBtn.addEventListener("click", setWfqWindow, false);
rfqSbt.addEventListener("click", getWfqWindow, false);
btnRTL.addEventListener("click", changeRTL, false);

function changeRTL () {
  console.log('ok')
  const strUser = btnRTL.options[btnRTL.selectedIndex].value;
  console.log(strUser === "arab")
  if ( strUser == "arab") {
    console.log("strUser =" + strUser)
    document.body.style.direction = "rtl";
    console.log("rtl = " + document.body.style.direction)
  } else if (strUser === "en") {
    document.body.style.direction = "";
  }
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
