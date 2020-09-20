$("#menu").click(function () {
  $(".nav-level-5-grid-in-grid").attr("visibility", "visible");
  $("#menu").toggleClass("nav-button-rotate");
  $("#nav-level-3-black-list").toggleClass("nav-level-3-black-list");
  $("#nav-level-2-black").toggleClass("nav-level-2-black2");
});

$("#shuffle").click(function () {
  $(".shuffle").shuffleChildren();
});
$("#shuffle2").click(function () {
  $(".shuffle").shuffleChildren();
});
$("#shuffle3").click(function () {
  $(".shuffle").shuffleChildren();
});
$("#shuffle4").click(function () {
  $(".shuffle").shuffleChildren();
});
jssor_1_slider_init();
