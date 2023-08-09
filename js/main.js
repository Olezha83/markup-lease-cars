const swiper = new Swiper('.swiper', {
  speed: 1000,

  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
})
