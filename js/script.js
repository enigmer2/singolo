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
  $(
    "a#button-menu-home, a#button-menu-serv, a#button-menu-port, a#button-menu-cont"
  ).toggleClass("open closed-menu-button ");
}
function menu_check() {
  if ($("#menu").attr("menu") == "closed") {
    $("#menu").attr("menu", "open");
    menu_change();
  } else {
    $("#menu").attr("menu", "closed");
    menu_change();
  }
}

$("#menu").click(function () {
  $(".nav-level-5-grid-in-grid").attr("visibility", "visible");
});

$("#next, #prev").click(function () {
  $("body").toggleClass("blue");
});
$("id-h1-hidden").click(function () {
  menu_change();
});
$("#shuffle, #shuffle2, #shuffle3, #shuffle4").click(function () {
  $(".shuffle").shuffleChildren();
});

$("#menu, a[class='open']").click(() => {
  menu_check();
});
$(
  "#button-menu-home, #button-menu-serv, #button-menu-port, #button-menu-cont"
).click(() => {
  if (
    $("#button-menu-home, #button-menu-serv, #button-menu-port, #button-menu-cont").attr("class") == "open") {
    menu_change();
  } else {
  }
});

jssor_1_slider_init();
