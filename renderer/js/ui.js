//import all anime js stuff here





window.addEventListener('DOMContentLoaded', () => {
const input = document.querySelector('.search-input');

input.addEventListener('focus', () => {
  anime({
    targets: '.mainPage-search-bar',
    boxShadow: [
      '0 0 0 rgba(255,255,255,0)', 
      '0 0 15px rgba(0,120,255,0.7)'
    ],
    scale: [1, 1.05],
    duration: 300,
    easing: 'easeOutQuad'
  });
});

input.addEventListener('blur', () => {
  anime({
    targets: '.mainPage-search-bar',
    boxShadow: [
      '0 0 15px rgba(0,120,255,0.7)', 
      '0 0 0 rgba(255,255,255,0)'
    ],
    scale: [1.05, 1],
    duration: 300,
    easing: 'easeInQuad'
  });
});


});