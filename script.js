$(document).ready(function(){
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $('scroll-up-btn').addClass("show");
    } else {
      $("scroll-up-btn").removeClass("show");
    }
  });

  //  SLIDE UP SCRIPT

  $("scroll-up-btn").click(function () {
    $("html").animate({ scrolltop: 0 });
  });

  //   TOOGLE MENU/NAVBAR SCRIPT

  $(".menu-btn").click(function () {
    $("header .navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // TYPING ANIMATION SCRIPT


  var typed = new Typed(".typing-2", {
    strings: ["Speaker", "Freelancer", "programmer"],
    typespeed:4,
    backspeed:4,
    loop: true,
  });



  // SLIDER SLICK

  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});