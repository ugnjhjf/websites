// Sticky header functionality
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Initialize Smooth Scrollbar
document.addEventListener("DOMContentLoaded", function () {
  SmoothScrollbar.init(document.body);
});

// Sticky header functionality using Smooth Scrollbar
SmoothScrollbar.init(document.body, {
  damping: 0.1, // Customize the damping (scroll inertia) if you want
}).addListener((scrollbar) => {
  scrollbar.addListener(({ offset }) => {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", offset.y > 0);
  });
});

// Functions for button actions
function openGithub() {
  window.open("https://github.com/yourusername");
}

function sendEmail() {
  window.location.href = "mailto:rokidna@outlook.com";
}

function goBackHome() {
  window.location.href = "index.html";
}


