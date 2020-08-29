$(window).on("load resize orientationchange", function () {
  $(".carousel").each(function () {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 1000) {
      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }
    } else {
      if (!$carousel.hasClass("slick-initialized")) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          dots: true,
        });
      }
    }
  });
});

$(document).ready(function () {
  $(".carousel-2").slick({
    slidesToShow: 1,
    centerMode: true,
    border: false,
  });
});

$(window).on("load resize orientationchange", function () {
  $(".carousel-3").each(function () {
    var $carousel = $(this);
    /* Initializes a slick carousel only on mobile screens */
    // slick on mobile
    if ($(window).width() > 750) {
      if ($carousel.hasClass("slick-initialized")) {
        $carousel.slick("unslick");
      }
    } else {
      if (!$carousel.hasClass("slick-initialized")) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          mobileFirst: true,
          dots: true,
        });
      }
    }
  });
});
