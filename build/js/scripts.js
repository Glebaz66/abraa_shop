'use strict';

var btnWrp = document.getElementById('content');
var btn = document.getElementById('sidebarCollapse');
var aside = document.querySelector('.categories-wrp .category');
var header = document.querySelector('.categories-wrp .category__header');
var main = document.querySelector('.categories-wrp .category__main');

btnWrp.addEventListener('click', hide, false);
// btn.addEventListener('click', hide, false)

function hide(e) {
  aside.classList.toggle('hide');
  header.classList.toggle('show');
  main.classList.toggle('show');
  btn.classList.toggle('active');
}