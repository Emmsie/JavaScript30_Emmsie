
const sliderImages = document.querySelectorAll(".slide-in");

  function checkSlide(){
    //when image is peaking on the screen, 50% in, image should slide in
    sliderImages.forEach( image => {
      // half way through the image (50%)
      const imageSlideInAt = (window.scrollY + window.innerHeight) - image.height/2;
      // bottom of the image
      const imageBottom = image.offsetTop + image.height;
      const imageIsHalfShown = imageSlideInAt > image.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (imageIsHalfShown && isNotScrolledPast) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.addEventListener("scroll", debounce(checkSlide)); //scroll: performancy isues possible, so use debounce()

  