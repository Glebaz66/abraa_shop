'use strict';

var btn = document.getElementById('content');
var aside = document.querySelector('.categories-wrp .category');
var header = document.querySelector('.categories-wrp .category__header');
var main = document.querySelector('.categories-wrp .category__main');

btn.addEventListener('click', hide, false);

function hide(e) {
  aside.classList.toggle('hide');
  header.classList.toggle('show');
  main.classList.toggle('show');
}