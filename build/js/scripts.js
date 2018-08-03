'use strict';

var btn = document.getElementById('content');
var aside = document.querySelector('.category');
var header = document.querySelector('.header');
var main = document.querySelector('.main');

btn.addEventListener('click', hide, false);

function hide(e) {
  aside.classList.toggle('hide');
  header.classList.toggle('show');
  main.classList.toggle('show');
}