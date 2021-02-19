const redButton = document.getElementById("redButton");
const blueButton = document.getElementById("blueButton");
const whiteButton = document.getElementById("whiteButton");

redButton.addEventListener("click", changeToRed);
blueButton.addEventListener("click", changeToBlue);
whiteButton.addEventListener("click", changeToWhite);

function changeToRed() {
  document.body.style.backgroundColor = "red";
}

function changeToBlue() {
  document.body.style.backgroundColor = "blue";
}

function changeToWhite() {
  document.body.style.backgroundColor = "white";
}
