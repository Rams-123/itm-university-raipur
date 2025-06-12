function closeMenu() {
  mobileMenu.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "black";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
  elmnt.style.color = "white";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("defaultOpen").click();
});

function toggleAccordion(id) {
  const content = document.getElementById(`accordionContent${id}`);
  content.classList.toggle("hidden");
}

var swiperOptions2 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 10,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true,
  },
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  speed: 4000,
  freeModeMomentum: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container2", swiperOptions2);

var swiperOptions1 = {
  loop: true,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
};

var swiper = new Swiper(".swiper-container1", swiperOptions1);

var swiper1 = new Swiper(".trusted-by-swiper", {
  spaceBetween: 12,
  grabCursor: true,
  slidesPerView: 8,
  a11y: false,
  freeMode: true,
  speed: 5000,
  loop: true,
  slidesPerView: "auto",
  noSwiping: true,
  noSwipingClass: "swiper-slide",
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
    767: {
      slidesPerView: 8,
      spaceBetween: 12,
    },
    992: {
      slidesPerView: 8,
      spaceBetween: 12,
    },
  },
});
