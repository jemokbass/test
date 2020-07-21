//WEBP ИЗОБРАЖЕНИЯ НА САЙТАХ
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});
//Swiper
const mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
//Input focus-remove placeholder
const input = document.querySelectorAll('.input');
input.forEach(item => {
  item.addEventListener('focus', function (e) {
    item.setAttribute('placeholder', '')
  });
  const place = item.placeholder;
  item.addEventListener('blur', function (e) {
    item.setAttribute('placeholder', place)
  });
})
//Timer
const countDownDate = new Date('July 25, 2020 00:00:00').getTime();
const countDownFunction = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector('.footer-content__timer').innerHTML = hours + ':' + minutes + ':' + seconds;
  if (distance < 0) {
    clearInterval(countDownFunction);
    document.querySelector('.footer-content__timer').innerHTML = 'К сожалению, время истекло'
  }
}, 1000
)

const btnForm = document.querySelector('.header__btn-scroll');

btnForm.addEventListener('click', function () {
  window.scrollTo({
    top: 10000,
    behavior: "smooth"
  });
})
let video = document.getElementById("myVideo");
video.play();
