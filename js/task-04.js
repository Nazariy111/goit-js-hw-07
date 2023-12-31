const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
    return alert("All form fields must be filled in");
    }
    
    const loginArray = {
        email,
        password
    };

    console.log(loginArray);
    form.reset();
}

const inputs = document.querySelectorAll("input");
for (const input of inputs) {
    input.classList.add("form-input");
}

const formBtn = document.querySelector("button");
formBtn.classList.add("form-btn");

const style = document.querySelector("style");
style.remove();


//перевіряємо структуру HTML-документа, чи правильно задані класи
console.log(document);
