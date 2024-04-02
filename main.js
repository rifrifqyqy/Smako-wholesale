document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    $(document).ready(function () {
      $(".midnavbar").css("transform", "translateY(-30px)");
    });
  } else {
    navbar.classList.remove("scrolled");
    $(document).ready(function () {
      $(".midnavbar").css("transform", "translateY(0)");
    });
  }
});
//
const links = document.querySelectorAll("nav .navbar-item li a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = link.getAttribute("href");
    const target = document.querySelector(hash);

    if (target) {
      const scrollTo = window.pageYOffset;
      const sectionMid = target.offsetTop + target.offsetHeight / 2 - window.innerHeight / 2 + scrollTo;

      window.scrollTo({
        top: sectionMid,
        behavior: "smooth",
      });
    }
  });
});
//
// viewport active
document.addEventListener("DOMContentLoaded", function () {
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const offset = section.offsetTop;
      const height = section.offsetHeight;
      const sectionMid = offset + height / 5;

      if (scrollTop >= sectionMid - windowHeight / 2 && scrollTop <= sectionMid + windowHeight / 2) {
        const sectionId = section.id;
        const links = document.querySelectorAll("nav ul li a");
        const footerLinks = document.querySelectorAll(".footer-wrapper ul li a");
        links.forEach((link) => {
          link.classList.remove("active");
        });
        footerLinks.forEach((link) => {
          link.classList.remove("active");
        });

        const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
        const activeFooterLink = document.querySelector(`.footer-wrapper ul li a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
        if (activeFooterLink) {
          activeFooterLink.classList.add("active");
        }
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
//
// $(document).ready(function () {
//   $(window)
//     .scroll(function () {
//       var windowHeight = $(window).height();
//       var scrollTop = $(window).scrollTop();

//       $("section").each(function () {
//         var offset = $(this).offset().top;
//         var height = $(this).outerHeight();
//         var sectionMid = offset + height / 5;

//         if (scrollTop >= sectionMid - windowHeight / 2 && scrollTop <= sectionMid + windowHeight / 2) {
//           var sectionId = $(this).attr("id");
//           $("nav ul li a").removeClass("active");

//           $('nav ul li a[href="#' + sectionId + '"]').addClass("active");
//         }
//       });
//     })
//     .scroll();
// });
$(".navigation").click(function (event) {
  event.preventDefault();

  var target = $(this.hash);
  $("html, body").animate(
    {
      scrollTop: target.offset().top,
    },
    400
  );
});

const multipleItemCarousel = document.querySelector("#carouselExample");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}

// mobile nav navigation
$(document).ready(function () {
  const menu_btn = $(".hamburger");
  const mobile_menu = $(".mobile-nav");
  const scrollto = $(".home-pg, .brands-pg, .categ-pg, .about-pg, .prodak-pg, .contact-pg");

  menu_btn.click(function () {
    menu_btn.toggleClass("is-active");
    mobile_menu.toggleClass("is-active");
  });

  scrollto.click(function () {
    menu_btn.removeClass("is-active");
    mobile_menu.removeClass("is-active");
  });
});
