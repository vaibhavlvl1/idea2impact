(function ($) {
  "use strict";
  var DataAnalytics = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }

      this.da_navbar();
      this.da_sticky_header();
    },

    // Navbar
    da_navbar: function () {
      $(".as-CommonClass-navbar").on("click", function (e) {
        var th = $(this).attr("top-h");
        var target = this.hash,
          $target = $(target);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top - th,
            },
            100,
            "swing",
            function () {
              window.location.hash = target;
            }
          );
      });
    },
    // Navbar

    // sticky header
    da_sticky_header: function () {
      $(window).scroll(function () {
        var wh = window.innerWidth;
        {
          var h = window.innerHeight;
          var window_top = $(window).scrollTop() + 1;
          if (window_top > 100) {
            $(".da-header-wrapper").addClass("da-header-fixed");
          } else {
            $(".da-header-wrapper").removeClass("da-header-fixed");
          }
        }
      });
    },
  };
  DataAnalytics.init();
})(jQuery);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<", ">"],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });
});
