import Swiper from 'swiper';

const initSwiper = () => {
  const swiper = new Swiper ('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}

export { initSwiper };
