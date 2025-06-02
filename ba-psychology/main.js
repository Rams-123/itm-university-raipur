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
});
