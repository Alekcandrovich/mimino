function swiperSlider() {
  const doubleMain = document.querySelectorAll('[data-slider="double-slider"]');
  const doublep3Main = document.querySelectorAll(
    '[data-slider="double-slider-page3"]'
  );
  const doublep4Main = document.querySelectorAll(
    '[data-slider="double-slider-page4"]'
  );
  const trippleMain = document.querySelectorAll(
    '[data-slider="tripple-slider"]'
  );
  const trippleMainRev = document.querySelectorAll(
    '[data-slider="tripple-slider-rev"]'
  );

  const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');

  if (doubleMain) {
    doubleMain.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        loop: true,
        speed: 1500,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (doublep3Main) {
    doublep3Main.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (doublep4Main) {
    doublep4Main.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    });
  }

  if (trippleMain) {
    trippleMain.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 86,
          },
        },
      });
    });
  }

  if (trippleMainRev) {
    trippleMainRev.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
    
      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          reverseDirection: true,
          disableOnInteraction: true,
        },
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 86,
          },
        },
      });
    });
  }

  if (heroSlider) {
    heroSlider.forEach(slider => {
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1500,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      });
    });
  }
}

window.addEventListener('load', swiperSlider, false);
