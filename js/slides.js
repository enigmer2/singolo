window.jssor_1_slider_init = function () {
  var jssor_1_SlideshowTransitions = [];

  var jssor_1_options = {
<<<<<<< HEAD
    $AutoPlay: 0,
=======
    $AutoPlay: 1,
>>>>>>> 6004b45... fix: ))
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1,
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
    },
    $ThumbnailNavigatorOptions: {
      $Class: $JssorThumbnailNavigator$,
      $SpacingX: 5,
      $SpacingY: 5,
    },
  };

<<<<<<< HEAD
  var jssor_1_slider = new $JssorSlider$("id-slideshow", jssor_1_options);
=======
  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
>>>>>>> 6004b45... fix: ))

  /*#region responsive code begin*/

  var MAX_WIDTH = 1020;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};
