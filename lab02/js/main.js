
document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementsByClassName("icon")[0];

  if (icon) {
    icon.addEventListener("click", function () {
      const nav = document.getElementById("myTopnav");
      if (nav.classList.contains("topnav")) {
        nav.classList.toggle("responsive");
      }
    });
  }
});

function showPopup() {
  const popup = document.getElementById("popupBox");
  if (popup) {
    popup.style.display = "block";
  }
}

function hidePopup() {
  const popup = document.getElementById("popupBox");
  if (popup) {
    popup.style.display = "none";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openTab(evt, tabName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
