// DOM references
const widthInput = document.querySelector("#width-input");
const heightInput = document.querySelector("#height-input");
const colorInput = document.querySelector("#color-input");
const displayWidth = document.querySelector("#display-width");
const displayHeight = document.querySelector("#display-height");
const displayColor = document.querySelector("#display-color");
const colorBox = document.getElementById("color-input");

const updateDisplay = (event) => {
  // add logic to account for negative values
  const width = widthInput.value;
  const height = heightInput.value;
  const color = colorInput.value;

  width > 0
    ? (displayWidth.innerHTML = `${width}px`)
    : (displayWidth.innerHTML = "Input Valid Width");
  height > 0
    ? (displayHeight.innerHTML = `${height}px`)
    : (displayHeight.innerHTML = "Input Valid Height");
  displayColor.innerHTML = colorInput.value;
};

widthInput.addEventListener("input", updateDisplay);
heightInput.addEventListener("input", updateDisplay);
colorInput.addEventListener("input", updateDisplay);

// need to target and set style of background of top right/bottom right color box.
