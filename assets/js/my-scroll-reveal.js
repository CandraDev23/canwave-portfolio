function myScrollReveal() {
      ScrollReveal().reveal("#hero .image-section", {
        delay: 400,
        distance: "120px",
        origin: "right",
        duration: 2000,
        reset: false,
      });
      ScrollReveal().reveal("#hero .text-section", {
        delay: 400,
        distance: "40px",
        origin: "left",
        duration: 2000,
        reset: false,
      });
      ScrollReveal().reveal("#tech-list", {
        delay: 400,
        distance: "40px",
        origin: "right",
        duration: 2000,
        reset: false,
      });
      ScrollReveal().reveal("#about .image-section", {
        delay: 400,
        distance: "40px",
        origin: "left",
        duration: 2000,
        reset: false,
      });
      ScrollReveal().reveal("#about h1, #about p", {
        delay: 400,
        distance: "40px",
        origin: "left",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#services > div > h1, #services > div > p", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#services .card", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
        // easing: 'cubic-bezier(0.42, 0, 1, 1)',
        // rotate: {
        //     x: 100,
        //     y: 100,
        //     z: 100,
        // },
        // scale: 2,
        // container: document.querySelector('.services'),
        // mobile: true
        // useDelay: 'once',
        // viewFactor: 1.0,
        //    viewOffset: {
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0,
        // },
      });
      ScrollReveal().reveal("#projects > h1, #projects > p", {
        delay: 400,
        distance: "40px",
        origin: "left",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#projects .card", {
        delay: 400,
        distance: "40px",
        origin: "left",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal(".pagination-controls", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#contact > div > h1, #contact > div > p", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#contact form > div, #contact form button", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal("#connect > h1, #connect > p", {
        delay: 400,
        distance: "40px",
        origin: "top",
        duration: 2000,
        interval: 200,
        reset: false,
      });
      ScrollReveal().reveal(
        "#connect .social-media > h4, #connect .social-media a",
        {
          delay: 400,
          distance: "40px",
          origin: "top",
          duration: 2000,
          interval: 200,
          reset: false,
        }
      );
      ScrollReveal().reveal(
        "#service-detail > .card",
        {
          delay: 400,
          distance: "40px",
          origin: "top",
          duration: 2000,
          interval: 200,
          reset: false,
        }
      );
      ScrollReveal().reveal(
        "#service-detail > #nav",
        {
          delay: 400,
          distance: "40px",
          origin: "left",
          duration: 2000,
          interval: 200,
          reset: false,
        }
      );
}