$(".menu-open-button").click(() => {
  $("body").toggleClass("menu-opened");
});

$("#next, #prev").click(function () {
  $("body").toggleClass("blue");
});
$(
  "#shuffleAll, #shuffleWebDesign, #shuffleGraphicDesign, #shuffleArtwork"
).click(function () {
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
  }
});

$(window).scroll(function () {
  let windowTopPosition = $(window).scrollTop();
  if (windowTopPosition >= 0 && windowTopPosition < 272) {
    $("#home").addClass("navigation-list-link-active");
    $("#services").removeClass("navigation-list-link-active");
    $("#portfolio").removeClass("navigation-list-link-active");
    $("#about").removeClass("navigation-list-link-active");
    $("#contact").removeClass("navigation-list-link-active");
  } else if (windowTopPosition >= 272 && windowTopPosition < 700) {
    $("#home").removeClass("navigation-list-link-active");
    $("#services").addClass("navigation-list-link-active");
    $("#portfolio").removeClass("navigation-list-link-active");
    $("#about").removeClass("navigation-list-link-active");
    $("#contact").removeClass("navigation-list-link-active");
  } else if (windowTopPosition >= 700 && windowTopPosition < 1000) {
    $("#home").removeClass("navigation-list-link-active");
    $("#services").removeClass("navigation-list-link-active");
    $("#portfolio").addClass("navigation-list-link-active");
    $("#about").removeClass("navigation-list-link-active");
    $("#contact").removeClass("navigation-list-link-active");
  } else {
    $("#home").removeClass("navigation-list-link-active");
    $("#services").removeClass("navigation-list-link-active");
    $("#portfolio").removeClass("navigation-list-link-active");
    $("#about").removeClass("navigation-list-link-active");
    $("#contact").addClass("navigation-list-link-active");
  }
});

jssor_1_slider_init();
