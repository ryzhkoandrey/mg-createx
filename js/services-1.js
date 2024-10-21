// WE OFFER

if (document.querySelector('.we-offer')) {
   const accordion1 = new GraphAccordion('.accordion-1', {
      speed: 300
   });

   const accordion2 = new GraphAccordion('.accordion-2', {
      speed: 300
   });
}

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