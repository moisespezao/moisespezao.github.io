const checkBox = document.getElementById('inputSwitch');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
checkBox.addEventListener("change", setTheme);
setTheme();

function setTheme() {
  document.body.classList = checkBox.checked ? "dark" : "clear";
  sun.style.filter = checkBox.checked ? "invert(0%) sepia(100%) saturate(18%) hue-rotate(72deg) brightness(101%) contrast(103%)" : "invert(0%) sepia(100%) saturate(18%) hue-rotate(72deg) brightness(101%) contrast(103%)";
  moon.style.filter = checkBox.checked ? "invert(85%) sepia(76%) saturate(2699%) hue-rotate(173deg) brightness(97%) contrast(103%)" : "invert(85%) sepia(76%) saturate(2699%) hue-rotate(173deg) brightness(97%) contrast(103%)";
}
