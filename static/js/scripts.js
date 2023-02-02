(function ($) {
  "use strict";

  /*********************************
    /* Table of Context
    �߶�ģ�壺http://www.bootstrapmb.com
    /* *******************************
    /* 
    /* Preloader
    /* Sticky Navbar
    /* Scroll Top Bar
    /* Mobile Menu Flyout Menu
    /* Mobile Menu Expand
    /* Nice Select
    /* Movie Slider
    /* Thriller Slider
    /*  Gallery Slider
    /* Add/Minus Quantity
    /* CountDown 
    /*  Swiper Hero Slider 
    /* Testimonial Slider
    /* Map

    *********************************/

  /*********************************
    /* Preloader Start
    *********************************/
  $(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(500).fadeOut("slow");
    $("body").delay(500).css({ overflow: "visible" });
  });

  /*********************************
    /* Sticky Navbar
    *********************************/
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var stikey = $(".header-sticky");

    if (scrolling >= 50) {
      $(stikey).addClass("nav-bg");
    } else {
      $(stikey).removeClass("nav-bg");
    }
  });

  /*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
  $(".toggler__btn").on("click", function (event) {
    event.preventDefault();
    $(".flyoutMenu").toggleClass("active");
  });
  $(".closest__btn").on("click", function (event) {
    event.preventDefault();
    $(".flyoutMenu").toggleClass("active");
  });

  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".flyout__inner").length === 0 &&
      $(e.target).closest(".toggler__btn").length === 0
    ) {
      $(".flyoutMenu").removeClass("active");
    }
  });
})(jQuery);

$(".que").click(function () {
  $(this).next(".anw").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
});
