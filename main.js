/* //search-box open close js code
let navbar = document.querySelector('.navbar')
let searchBox = document.querySelector('.search-box .bx-search')
let searchBoxCancel = document.querySelector('.search-box .bx-x')

searchBox.addEventListener('click', () => {
  navbar.classList.toggle('showInput')
  if (navbar.classList.contains('showInput')) {
    searchBox.classList.replace('bx-search', 'bx-x')
  } else {
    searchBox.classList.replace('bx-x', 'bx-search')
  }
})*/

// sidebar open close js code
let navLinks = document.querySelector('.nav-links')
let menuOpenBtn = document.querySelector('.navbar .icon-menu')
let menuCloseBtn = document.querySelector('.nav-links .icon-close')
menuOpenBtn.onclick = function () {
  navLinks.style.left = '0'
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = '-100%'
}

// sidebar submenu open close js code
let iconDown = document.querySelector('.icon-down')
iconDown.onclick = function () {
  navLinks.classList.toggle('show1')
}
let moreArrow = document.querySelector('.more-arrow')
moreArrow.onclick = function () {
  navLinks.classList.toggle('show2')
}
let jsArrow = document.querySelector('.js-arrow')
jsArrow.onclick = function () {
  navLinks.classList.toggle('show3')
}

//swiper-slider
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});

