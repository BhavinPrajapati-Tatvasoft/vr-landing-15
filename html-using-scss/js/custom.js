$(document).ready(function () {
  //Prevent Page Reload on all # links
  $("body").on("click", "a[href='#']", function (e) {
    e.preventDefault();
  });

  //placeholder
  $("[placeholder]").each(function () {
    $(this).attr("data-placeholder", this.placeholder);
    $(this).bind("focus", function () {
      this.placeholder = "";
    });
    $(this).bind("blur", function () {
      this.placeholder = $(this).attr("data-placeholder");
    });
  });

  // On scroll Add Class
  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 200) {
      $(".wrapper").addClass("page-scrolled");
    } else {
      $(".wrapper").removeClass("page-scrolled");
    }
  });

  // Add remove class when window resize finished
  var $resizeTimer;
  $(window).on("resize", function (e) {
    if (!$("body").hasClass("window-resizing")) {
      $("body").addClass("window-resizing");
    }
    clearTimeout($resizeTimer);
    $resizeTimer = setTimeout(function () {
      $("body").removeClass("window-resizing");
    }, 250);
  });

  // Add new js functions here -----------------------------------------------------------------
  $(".slider").slick({
    infinite: true,
    dots: true,
    arrows: false,
  });

  $(".middle-slider").slick({
    infinite: true,
    arrows: false,
    centerMode: true,
    slidesToShow: 1.68,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  setTimeout(function () {
    $(".grid").masonry({
      // options
      itemSelector: ".grid-item",
    });
  });

  $(".next-arrow").click(function () {
    $(".middle-slider").slick("slickNext");
  });
  $(".prev-arrow").click(function () {
    $(".middle-slider").slick("slickPrev");
  });

  $(window).scroll(function (e) {
    if ($(window).scrollTop() > 20) {
      $(".wrapper").addClass("add-header-bg");
    } else {
      $(".wrapper").removeClass("add-header-bg");
    }
  });

  // Theme Settings
  if (!localStorage.getItem("myAdminTheme"))
    localStorage.setItem("myAdminTheme", "theme-default");
  $("html").addClass(localStorage.getItem("myAdminTheme"));
  function getSecondPart(str) {
    return str.split("-")[1];
  }
  var $themeName = getSecondPart(localStorage.getItem("myAdminTheme"));
  function addActiveClasstoThemeBtn() {
    $(".themes-listing li a.active").removeClass("active");
    $(".themes-listing li a[data-theme=" + $themeName + "]").addClass("active");
  }
  if (localStorage.getItem("myAdminTheme")) {
    addActiveClasstoThemeBtn();
  }
  $(".themes-listing li a").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if (!$this.hasClass("active")) {
      localStorage.setItem("myAdminTheme", "theme-" + $this.attr("data-theme"));
      $("html").removeClass().addClass(localStorage.getItem("myAdminTheme"));
      $themeName = getSecondPart(localStorage.getItem("myAdminTheme"));
      addActiveClasstoThemeBtn();
    }
  });
  // Don't add anything below this --------------------------------------------------------------
  // Add Class on Window Load
  $("body").addClass("page-loaded");
});
