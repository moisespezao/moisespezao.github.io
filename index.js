const checkBox = document.getElementById('inputSwitch');
checkBox.addEventListener("change", updateBackground);
updateBackground();

function updateBackground() {
  document.body.classList = checkBox.checked ? "dark" : "clear";
}