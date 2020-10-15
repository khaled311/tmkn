$(window).on("load", function(){
  AOS.refresh();
})

$(function () {
  AOS.init({
    once: false,
    disable: "mobile",
  });

  $(".videos-box").on("click", function () {
    var self = $(this);
    var data = {
      link: self.attr("data-videoLink"),
      image: self.attr("data-image"),
      title: self.attr("data-videoTitle"),
      time: self.attr("data-videoTime"),
    };
    $(".video-lg .video-title h2").text(data.title);
    $(".video-lg .video-title p").text(data.time);
    $(".video-lg a").attr("href", data.link);
    $(".video-lg a img.lg").attr("src", data.image);
  });
  $(window).on("scroll", function () {
    AOS.refresh();
  });
  $(".scrollBar a").on("click", function (e) {
    e.preventDefault();
    var items = $(".videos-box");
    $(".videos-list")
      .stop()
      .animate({ scrollTop: items.length * items[0].scrollHeight }, 1000);
  });

  $(".toTop").on("click", function (e) {
    e.preventDefault();
    $("html , body").stop().animate({ scrollTop: 0 }, 1000);
  });
  $(".nav-torger , .phone-list .overlay").on("click", function () {
    $(".nav-torger").toggleClass("active");
    $(".phone-list").toggleClass("active");
    $("html").toggleClass("overflow");
  });
  // Toggle open
  $(".sideNav li").on("click", function (e) {
    $(this).find(".drop").slideToggle();
    $(this).siblings().find(".drop").slideUp();
    $(this).find("i").toggleClass("open");
    $(this).siblings().find("i").removeClass("open");
    e.stopPropagation();
  });

  // open Side Nav
  $(".menuTriger").on("click", function () {
    $(this).fadeOut();
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
  });

  // Close Side Nav
  $(".navover, .close1").on("click", function () {
    if ($(".sideNav").hasClass("open")) {
      $(".menuTriger").fadeIn();
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
    }
  });

  $(".carousel-news .owl-carousel").owlCarousel({
    autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    navText: [
      "<span><img  src='../images/right-arrow.png' class='img-fluid' /></span>",
      "<span><img  src='../images/left-arrow.png' class='img-fluid' /></span>",
    ],
  });

  $(".min-carousel .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 1,
    dots: true,
    smartSpeed: 1000,
    navText: [
      "<span><img  src='../images/right-arrow.png' class='img-fluid' /></span>",
      "<span><img  src='../images/left-arrow.png' class='img-fluid' /></span>",
    ],
  });

  // clients Slider
  $(".carousel-container .owl-carousel").owlCarousel({
    // autoplay: true,
    rtl: true,
    loop: true,
    nav: true,
    items: 4,
    // margin: 20,

    dots: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    navText: [
      "<span><img  src='../images/right-arrow.png' class='img-fluid' /></span>",
      "<span><img  src='../images/left-arrow.png' class='img-fluid' /></span>",
    ],
  });

  //footer accordion
  if ($(window).width() < 992) {
    $(".foot-links button").attr("data-toggle", "collapse");
  }

  $(".foot-links button").on("click", function () {
    $(this).toggleClass("trans");
    $(this).parent().parent().siblings().find(".collapse").collapse("hide");
    $(this).parent().parent().siblings().find("button").removeClass("trans");
  });
});
