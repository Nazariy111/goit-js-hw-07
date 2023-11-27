const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const title = document.querySelector("h1");
title.classList.add("title-hello");

input.addEventListener("input", (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});




