const mobileNavbtn = document.querySelector('#nav-menu');
const mobileNavmenu = document.querySelector('.primary-nav');
const menuClose = document.querySelector('#closemenu');


mobileNavbtn.addEventListener('click', function() {
  mobileNavmenu.classList.add('active')
});

menuClose.addEventListener('click', function() {
  mobileNavmenu.classList.remove('active')
});



console.log('Hello Crack Head');
