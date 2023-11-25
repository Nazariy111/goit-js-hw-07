function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget");
const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

const handleClick = () => {
  widget.style.backgroundColor = getRandomHexColor();
  color.textContent = widget.style.backgroundColor;
}

btn.addEventListener("click", handleClick);

const style = document.querySelector("style");
style.remove();

console.log(document);