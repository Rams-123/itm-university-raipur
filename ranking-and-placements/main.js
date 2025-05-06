const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

openButton.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  openButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
});

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

function openPage(pageName, elmnt, color, tabcontentId, tablinkId) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName(tabcontentId);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName(tablinkId);
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
  document.getElementById("defaultOpen1").click();
  document.getElementById("defaultOpen2").click();
  document.getElementById("defaultOpen3").click();
});
