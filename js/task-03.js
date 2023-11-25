const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const title = document.querySelector("h1");
title.classList.add("title-hello");

input.addEventListener("input", (event) => {
    output.textContent = event.currentTarget.value;
    output.textContent = output.textContent.trim();
    if (output.textContent === "") {
        output.textContent = "Anonymous";
    }
});




