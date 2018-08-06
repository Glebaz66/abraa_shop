const btnWrpHeader = document.getElementById("content");
 


btnWrp.addEventListener("click", hide, false);
btnWrpHeader.addEventListener("click", hide, false);

function hide(e) {
    aside.classList.toggle("hide");
    header.classList.toggle("show");
    main.classList.toggle("show");
    btn.classList.toggle("active");
   // TODO open MENU
  }