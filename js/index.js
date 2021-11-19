// prevent page refresh when <a> tag clicked
const aElements = document.querySelectorAll('a[href=""]');
for (const elment of aElements) {
  elment.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

// fix menu
const mainNav = document.querySelector(".main-nav");
window.addEventListener("scroll", function () {
  if (scrollY !== 0) {
    mainNav.classList.add("main-nav-fix");
  } else {
    mainNav.classList.remove("main-nav-fix");
  }
});

// modal sign up form and log in form
const signUpButton = document.querySelector(".main-form > a:first-child");
const logInButton = document.querySelector(".main-form > a:last-of-type");
const signUpForm = document.getElementById("modal-sign-up");
const logInForm = document.getElementById("modal-log-in");
const closeIcon = document.querySelectorAll(".modal > i");
const modalContentlogInElements = document.querySelectorAll(".link-to-log-in");
const modalContentSignUpElements =
  document.querySelectorAll(".link-to-sign-up");

function showSignUp() {
  signUpForm.style.display = "block";
}
function hideSignUp() {
  signUpForm.style.display = "none";
}
function showLogIn() {
  logInForm.style.display = "block";
}
function hideLogIn() {
  logInForm.style.display = "none";
}

signUpButton.addEventListener("click", function () {
  showSignUp();
});
logInButton.addEventListener("click", function () {
  showLogIn();
});

for (const element of modalContentlogInElements) {
  element.addEventListener("click", function () {
    hideSignUp();
    showLogIn();
  });
}
for (const element of modalContentSignUpElements) {
  element.addEventListener("click", function () {
    hideLogIn();
    showSignUp();
  });
}

signUpForm.addEventListener("click", function (e) {
  if (e.target === this) {
    hideSignUp();
  }
});
logInForm.addEventListener("click", function (e) {
  if (e.target === this) {
    hideLogIn();
  }
});
for (const icon of closeIcon) {
  icon.addEventListener("click", function (e) {
    hideSignUp();
    hideLogIn();
  });
}

// toggle menu
const mobileMainMenu = document.querySelector(".mobile-main-menu");
document
  .querySelector(".toggle-menu-open")
  .addEventListener("click", function () {
    mobileMainMenu.style.left = "0";
  });
document
  .querySelector(".toggle-menu-close")
  .addEventListener("click", function () {
    mobileMainMenu.style.left = "-100%";
  });

// filter courses (flip cards)
const filterBtns = document.querySelectorAll(".filter-btns span");
const flipCards = document.querySelectorAll(".flip-card");
for (const btn of filterBtns) {
  btn.addEventListener("click", function () {
    if (this.className !== "selected") {
      filterBtns.forEach((element) => {
        element.classList.remove("selected");
      });
      this.classList.add("selected");
      const dataTarget = this.dataset.target;
      for (const item of flipCards) {
        item.style.display = "block";
        if (dataTarget === "all") {
          item.style.display = "block";
        } else if (item.dataset.select !== dataTarget) {
          item.style.display = "none";
        }
      }
    }
  });
}

// slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
  });
});

// elevator
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 550) {
      $(".elevator").css("display", "flex");
    } else {
      $(".elevator").css("display", "none");
    }
  });

  $(".elevator").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1200);
  });
});

// loader
$(window).on("load", function () {
  $(".loader").fadeOut();
});
