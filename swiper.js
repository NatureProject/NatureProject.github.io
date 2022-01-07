const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    /*preloadImages: false,

    lazy: {
      loadOnTransitionStart: false,
      loadPervNext: false,
    },

    watchSlideProgress: true,
    watchSlideVisibility: true,*/

    autoHeight: true,

    slidesPerView: 1,


    effect: 'coverflow',
    coverflowEffect: {
    rotate: 90,
    slideShadows: false,
  },

    speed: 800,

    preloadImages: false,

    lazy: {
      loadPrevNext: true,
      loadOnTransitionStart: false,
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }

  });