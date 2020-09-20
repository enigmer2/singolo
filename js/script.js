$("#menu").click(function () {
  $(".nav-level-5-grid-in-grid").attr("visibility", "visible");
});

$("#next, #prev").click(function () {
  $("body").toggleClass("blue");
});

$("#shuffle, #shuffle2, #shuffle3, #shuffle4").click(function () {
  $(".shuffle").shuffleChildren();
});

$("#menu").click(() => {
  $("#id-header-wrapper").toggleClass("header-wrapper header-wrapper-71px");
  $("#visible-menu").toggleClass("logo black-fixed-menu-visible");

  $("#id-header-nav-wrappper").toggleClass(
    "header-nav-wrappper black-fixed-nav-visible"
  );
  $("#id-grid-in-grid").toggleClass(
    "nav-level-5-grid-in-grid black-fixed-nav-visible-link"
  );
  $("#id-h1-hidden").toggleClass("hidden black-out");
  $("#id-h1-hidden").toggleClass("nav-before-text nav-before-text-hidden");
});

jssor_1_slider_init();
