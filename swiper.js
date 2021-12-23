const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      disable,
    },
    
   /* on: {
        slideChange: function (){
            document.querySelector('.swiper__prev_sett svg path').style.fillOpacity = '0.8';
        }
    },*/

  });