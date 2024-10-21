// GET VAR (--grid-gap)

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt( bodyStyles.getPropertyValue('--grid-gap') );

// HERO

const heroSliderSpeed = 1500;
const fooBar = bodyStyles.getPropertyValue('--hero-slider-speed'); //get

document.body.style.setProperty('--hero-slider-speed', heroSliderSpeed + 'ms');//set

const heroSlider = new Swiper('.hero-slider', {
   slidesPerView: 1,

   navigation: {
      nextEl: '.hero__next',
      prevEl: '.hero__prev',
   },

   speed: heroSliderSpeed,
   autoplay: {
      delay: 1000,
   },

   pagination: {
      el: '.hero__pag',
      type: 'bullets',
      clickable: true
   },
   
   on: {
      init: function () {
         const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

         paginationBullets.forEach(el => {
            el.innerHTML = `<span class="hero__bar"></span>`;
         });
      },
   },
});

// ABOUT-SECTION

const videoBlock = document.querySelector('.video-block');

if (videoBlock) {
   const video = videoBlock.querySelector('video');
   const playBtn = videoBlock.querySelector('.video-block__play');

   playBtn.addEventListener('click', () => {
      videoBlock.classList.add('video-block--played');
      video.play();
      video.controls = true;
      playBtn.classList.add('video-block__play--played');
   });

   video.onpause = function () {
      videoBlock.classList.remove('video-block--played');
      video.controls = false;
      playBtn.classList.remove('video-block__play--played');
   };
}

// PORTFOLIO-SECTION

const portfolioSlider = new Swiper('.portfolio-section__items', {
   slidesPerView: 1,
   spaceBetween: gap,
   loop: true,
   watchSlidesProgress: true, // to avoid shadow clipping effect

   navigation: {
      nextEl: '.portfolio-section__next',
      prevEl: '.portfolio-section__prev',
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

// TESTIMONIALS

const testimonialsSlider = new Swiper('.testimonials__items', {
   slidesPerView: 1,
   loop: true,

   navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
   },
});

// FACTS

const circles = document.querySelectorAll('.facts-element__circle');

circles.forEach(el => {
   if (el.dataset.percentage == 'true') {
      let progress = el.querySelector('.progress');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let full = el.dataset.full;
      let value = el.dataset.value;
      let percentageProgress = Math.floor(value / full * 100);
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
   } else {
      let progress = el.querySelector('.progress');
      let radius = progress.getAttribute('r');
      let circleLength = 2 * Math.PI * radius;
      let percent = el.dataset.percent;
      let percentageProgress = Math.floor(percent);
      progress.setAttribute('stroke-dasharray', circleLength);
      progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
   }
});