const btn = document.getElementById('content')
const aside = document.querySelector('.category')
const header = document.querySelector('.header')
const main = document.querySelector('.main')

btn.addEventListener('click', hide, false)

function hide(e) {
  aside.classList.toggle('hide');
  header.classList.toggle('show');
  main.classList.toggle('show');
}