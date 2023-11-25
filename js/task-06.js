function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector("input");
let boxSize = 30; 
let amount = 0;

const destroyBoxes = () => {
  for (let i = document.querySelectorAll(".div-box").length; i > 0; i -= 1) {
    const divBox = document.querySelector(".div-box");
    divBox.remove();
  }
  input.value = "";
}

const createBoxes = () => {
  if (amount > 0 && amount <= 100) {
    for (let i = 1; i <= amount; i += 1) {
      const divBox = document.createElement("div");
      divBox.classList.add("div-box");
      divBox.style.width = `${boxSize}px`;
      divBox.style.height = `${boxSize}px`;
      divBox.style.backgroundColor = getRandomHexColor();
      boxes.append(divBox);
      boxSize += 10;
    }
  }
  boxSize = 30;
  input.value = "";
}

input.addEventListener("blur", (event) => amount = Number(event.currentTarget.value));

createBtn.addEventListener("click", createBoxes);

destroyBtn.addEventListener("click", destroyBoxes);




//перевіряємо структуру HTML-документа, чи правильно виконана вкладеність і задані класи
console.log(document);

