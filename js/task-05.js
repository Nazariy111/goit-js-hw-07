function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

const handleClick = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = body.style.backgroundColor;
}

changeColorButton.addEventListener("click", handleClick);

//про видалення тегу style - я продивився, що в ньому є і зробив висновок, що легше 
// видалити його ніж видаляти зайві рядки в ньому, які заважали стилізувати по ТЗ.
//якщо можна, підкажіть, будь-ласка, як це треба було б зробити, щоб було ідеально. Дякую!
const style = document.querySelector("style");
style.remove();

//перевіряємо структуру документа після внесених змін
console.log(document);