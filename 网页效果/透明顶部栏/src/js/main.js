windows.addEventListener("scroll", function () {
  // console.log("scrolling");
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
