window.jssor_1_slider_init = function () {
  const jssor_1_SlideshowTransitions = [];

  const jssor_1_options = {
    $AutoPlay: 0,
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

  const jssor_1_slider = new $JssorSlider$(
    "section-slideshow",
    jssor_1_options
  );

  /*#region responsive code begin*/

  const MAX_WIDTH = 1020;

  function ScaleSlider() {
    const containerElement = jssor_1_slider.$Elmt.parentNode;
    const containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      const expectedWidth = Math.min(
        MAX_WIDTH || containerWidth,
        containerWidth
      );

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
