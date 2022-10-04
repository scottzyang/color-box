// DOM references
const widthInput = document.querySelector("#width-input"); //
const heightInput = document.querySelector("#height-input"); //
const displayWidth = document.querySelector("#display-width"); //
const displayHeight = document.querySelector("#display-height"); //
const colorInput = document.querySelector("#color-input"); //
const hexDisplayColor = document.querySelector("#display-color");
const colorBox = document.querySelector("#color-box");

const updateColorBox = (event) => {
  const newColor = colorInput.value;
  hexDisplayColor.innerHTML = newColor;
  colorInput.style.backgroundColor = newColor;
  colorBox.style.backgroundColor = newColor;
};

const updateDisplay = (event) => {
  // add logic to account for negative values
  const width = widthInput.value;
  const height = heightInput.value;

  width > 0
    ? (displayWidth.innerHTML = `${width}px`)
    : (displayWidth.innerHTML = "Input Valid Width");
  colorBox.style.width = `${width}px`;
  height > 0
    ? (displayHeight.innerHTML = `${height}px`)
    : (displayHeight.innerHTML = "Input Valid Height");
  colorBox.style.height = `${height}px`;
};

widthInput.addEventListener("input", updateDisplay);
heightInput.addEventListener("input", updateDisplay);
colorInput.addEventListener("input", updateColorBox);

// need to target and set style of background of top right/bottom right color box.
