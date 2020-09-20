function menu_change() {
  $("#id-header-wrapper").toggleClass("header-wrapper header-wrapper-71px");
  $("#visible-menu").toggleClass("logo black-fixed-menu-visible");

  $("#id-header-nav-wrapper").toggleClass(
    "header-nav-wrapper black-fixed-nav-visible"
  );
  $("#id-grid-in-grid").toggleClass(
    "nav-level-5-grid-in-grid black-fixed-nav-visible-link"
  );
  $("#id-h1-hidden").toggleClass("hidden black-out");
  $("#menu").toggleClass("nav-button black-fixed-menu-nav-button");
  $("#id-singolo").toggleClass("singolo singolo2");
  $("li#id-nav-before-text").toggleClass(
    "nav-before-text nav-before-text-hidden"
  );
}

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
  menu_change();
});

jssor_1_slider_init();
