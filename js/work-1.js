// PAGE HERO

const workSlider = new Swiper('.work-images-nav', {
   slidesPerView: 3,
   spaceBetween: 20,

   breakpoints: {
      576: {
         slidesPerView: 6,
      },
      768: {
         slidesPerView: 10,
      },
   },
});

const workSliderNav = new Swiper('.work-images-slider', {
   slidesPerView: 1,
   spaceBetween: 20,
   loop: true,

   navigation: {
      nextEl: '.work-images-slider__next',
      prevEl: '.work-images-slider__prev',
   },
   
   thumbs: {
      swiper: workSlider,
   },
});

// RELATED PROJECTS

// get var(--grid-gap)

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

// swiper

const relatedProjectsSlider = new Swiper('.related-projects__items', {
   slidesPerView: 1,
   spaceBetween: gap,
   loop: true,
   watchSlidesProgress: true, // to avoid shadow clipping effect

   navigation: {
      nextEl: '.related-projects__next',
      prevEl: '.related-projects__prev',
   },

   breakpoints: {
      576: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
   },
});