// TESTIMONIALS

const testimonialsSlider = new Swiper('.testimonials__items', {
   slidesPerView: 1,
   loop: true,

   navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
   },
});