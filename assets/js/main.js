$("img").attr("draggable", false);
$(window).on("load", function () {
  setTimeout(function () {
    $(".preloader").delay(2000).fadeOut(700);
    Splitting();
    // ####### start wow animtion effects ###################
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
    // ####### end wow animtion effects ###################
    // ScrollReveal
    const srs = ScrollReveal({
      distance: "50px",
      duration: 2000,
      delay: 300,
    });

    srs.reveal(".intro-papers img", {
      origin: "bottom",
      interval: 1000,
      delay: 1000,
    });

    srs.reveal(
      ".heighLignt-card, .cover-content p, .cover-content ul li, .works-card, .Assistant-card, .Assistant-card h4, .Assistant-card ul li, .SalesSupport .content ul li, .pricing-card, pricing-card h5, .pricing-card .pricing-body h6, .pricing-body ul li, .Consultation-form .form-control, .footer img, .footer ul li a",
      {
        origin: "bottom",
        interval: 100,
      }
    );

    srs.reveal(" .box .comment-box", {
      origin: "bottom",
      interval: 500,
      delay: 600,
    });
  }, 1000);
});
/*===================================*
        start window scroll
    /*===================================*/
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 250) {
    $(".cover-navbar").addClass("nav-fixed");
  } else {
    $(".cover-navbar").removeClass("nav-fixed");
  }
});
VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
  max: 17,
  speed: 300,
  glare: true,
  maxGlare: 0.5,
});
$(function () {
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top,
        },
        500
      );
      return false;
    }
  });
});

const navigationHeight = document.querySelector(".cover-navbar").offsetHeight;

// console.log(document.documentElement);

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight - 1 + "px"
);

$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});
