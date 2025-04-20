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

document.addEventListener("DOMContentLoaded", function () {
  // Sticky Header (Fixed after scroll)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".da-header-wrapper");
    if (window.scrollY > 100) {
      header.classList.add("da-header-fixed");
    } else {
      header.classList.remove("da-header-fixed");
    }
  });

  // Smooth Scroll on Navbar Link Click
  const navbarLinks = document.querySelectorAll(".as-CommonClass-navbar");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const topH = parseInt(this.getAttribute("top-h")) || 0;
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.offsetTop - topH;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Update URL hash without jumping
        window.history.pushState(null, null, targetId);
      }
    });
  });
});

const toggleBtn = document.querySelector(".da-toggle-btn");
const mobileMenu = document.querySelector(".mobile-menu-container");

toggleBtn.addEventListener("click", function () {
  if (mobileMenu.style.left === "0px") {
    mobileMenu.style.left = "-100%";
  } else {
    mobileMenu.style.left = "0";
  }
});
