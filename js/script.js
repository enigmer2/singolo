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
