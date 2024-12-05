


window.addEventListener('load', function () {
  document.body.classList.add('fade-in');
});

function setupLinkTransitions() {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
      const targetUrl = this.href;

  
      if (targetUrl && !targetUrl.includes(window.location.pathname) && !targetUrl.startsWith('#')) {
        event.preventDefault(); 

   
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

   
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 800);
      }
    });
  });
}

setupLinkTransitions();









var swiper = new Swiper(".testimonial-wrapper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        with: 320,
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      567: {
        with: 567,
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      1024: {
        with: 1024,
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        with: 1200,
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  