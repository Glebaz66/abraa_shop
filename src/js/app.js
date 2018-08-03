const btnWrp = document.getElementById('content')
const btn = document.getElementById('sidebarCollapse')
const aside = document.querySelector('.categories-wrp .category')
const header = document.querySelector('.categories-wrp .category__header')
const main = document.querySelector('.categories-wrp .category__main')

btnWrp.addEventListener('click', hide, false)
// btn.addEventListener('click', hide, false)

function hide(e) {
  aside.classList.toggle('hide');
  header.classList.toggle('show');
  main.classList.toggle('show');
  btn.classList.toggle('active');
}