var swiperhero = new Swiper('.swiper-hero', {
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
autoplay: {
  delay: 3500,
},
roundLengths: true,
autoHeight: false,
slidesPerView: 1,
spaceBetween: 0,
});

var swiperhero = new Swiper('.swiper-projects', {
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
autoplay: {
  delay: 2000,
},
roundLengths: true,
autoHeight: false,
slidesPerView: 2,
spaceBetween: 0,
breakpointsInverse: true,
      breakpoints: {
      480: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 4,
      },
    }
});