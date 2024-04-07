function myFunction() {
  document.getElementById("demo").innerHTML = "我的第一个 JavaScript 函数";
}

function makeAlert() {
  alert("Hello World!");
}

function changeABC() {
  document.getElementById("abc").innerHTML = "<h4>Changed by JavaScript</h1>";
}

var a = 15;
function showA() {
  document.getElementById("demo").innerHTML = a;
}

function addA() {
  document.getElementById("demo").innerHTML = ++a;
}

function refreshTime() {
  document.getElementById("ctime").innerHTML = Date();
}
