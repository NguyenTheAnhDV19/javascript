const menu = document.querySelector('#menu');
const navIcon = document.querySelector('#nav-icon')

menu.addEventListener('click', (e) => {
  navIcon.classList.toggle('active');
})