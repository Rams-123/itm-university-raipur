var swiperOptions2 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 6,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  speed: 4000,
  freeModeMomentum: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);

var swiper1 = new Swiper(".trusted-by-swiper", {
  spaceBetween: 12,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 5000,
  loop: true,
  slidesPerView: "auto",
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      spaceBetween: 12,
    },
    480: {
      spaceBetween: 12,
    },
    767: {
      spaceBetween: 12,
    },
    992: {
      spaceBetween: 12,
    },
  },
});
