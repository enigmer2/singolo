// function menu_change() {
//   $("#id-header-wrapper").toggleClass("header-wrapper header-wrapper-71px");
//   $("#visible-menu").toggleClass("logo black-fixed-menu-visible");
//   $("#id-header-nav-wrapper").toggleClass("header-nav-wrapper black-fixed-nav-visible");
//   $("#id-grid-in-grid").toggleClass("nav-level-5-grid-in-grid black-fixed-nav-visible-link");
//   $("#id-h1-hidden").toggleClass("hidden black-out");
//   $("#menu").toggleClass("nav-button black-fixed-menu-nav-button");
//   $("#id-singolo").toggleClass("singolo singolo2");
//   $("li#id-nav-before-text").toggleClass("nav-before-text nav-before-text-hidden");
//   $("a#button-menu-home, a#button-menu-serv, a#button-menu-port, a#button-menu-cont").toggleClass("open closed-menu-button ");
// }

// function menu_check() {
//   if ($("#menu").attr("menu") == "closed") {
//     $("#menu").attr("menu", "open");
//     menu_change();
//   } else {
//     $("#menu").attr("menu", "closed");
//     menu_change();
//   }
// }

// $("#menu").click(function () {
//   $(".nav-level-5-grid-in-grid").attr("visibility", "visible");
// });
// $("id-h1-hidden").click(function () {
//   menu_change();
// });
// $("#menu, a[class='open']").click(() => {
//   menu_check();
// });
$(".menu-open-button").click(() => {
  $("body").toggleClass("menu-opened");
});

$("#next, #prev").click(function () {
  $("body").toggleClass("blue");
});
$("#shuffle, #shuffle2, #shuffle3, #shuffle4").click(function () {
  $(".shuffle").shuffleChildren();
});
$(
  "#button-menu-home, #button-menu-serv, #button-menu-port, #button-menu-cont"
).click(() => {
  if (
    $(
      "#button-menu-home, #button-menu-serv, #button-menu-port, #button-menu-cont"
    ).attr("class") == "open"
  ) {
    menu_change();
  } else {
  }
});
$(window).scroll(function () {
  let windowTopPosition = $(window).scrollTop();
  if (windowTopPosition >= 0 && windowTopPosition < 272) {
    $("#Home").addClass("navigation-list-link-active"),
      $("#Services").removeClass("navigation-list-link-active"),
      $("#Portfolio").removeClass("navigation-list-link-active"),
      $("#About").removeClass("navigation-list-link-active"),
      $("#Contact").removeClass("navigation-list-link-active");
  } else if (windowTopPosition > 272 && windowTopPosition < 700) {
    $("#Home").removeClass("navigation-list-link-active"),
      $("#Services").addClass("navigation-list-link-active"),
      $("#Portfolio").removeClass("navigation-list-link-active"),
      $("#About").removeClass("navigation-list-link-active"),
      $("#Contact").removeClass("navigation-list-link-active");
  } else if (windowTopPosition > 700 && windowTopPosition < 1000) {
    $("#Home").removeClass("navigation-list-link-active"),
      $("#Services").removeClass("navigation-list-link-active"),
      $("#Portfolio").addClass("navigation-list-link-active"),
      $("#About").removeClass("navigation-list-link-active"),
      $("#Contact").removeClass("navigation-list-link-active");
  } else {
    $("#Home").removeClass("navigation-list-link-active"),
      $("#Services").removeClass("navigation-list-link-active"),
      $("#Portfolio").removeClass("navigation-list-link-active"),
      $("#About").removeClass("navigation-list-link-active"),
      $("#Contact").addClass("navigation-list-link-active");
  }
});
jssor_1_slider_init();
