// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import "../libs/gsap/gsap.min";
import "../libs/gsap/ScrollTrigger.min";
import "../libs/gsap/ScrollSmoother.min";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", function (e) {
    document.documentElement.style.setProperty(
      "--scrollTop",
      `${this.scrollY}px`
    );
    // Update method
  });

  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
  });
});
