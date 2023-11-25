const itemsOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsOfCategories.length}`);

for (const item of itemsOfCategories) {
    const categorie = item.querySelector("h2");
    console.log(`Categorie: ${categorie.textContent}`);
    categorie.classList.add("item-title");

    const ulCategorie = item.querySelector("ul");
    ulCategorie.classList.add("item-ul");

    const elementsOfCategorie = item.querySelectorAll("li");
    console.log(`Elements: ${elementsOfCategorie.length}`);

    for (const element of elementsOfCategorie) {
        element.classList.add("item-li");
    }

}

// перевіряємо структуру, чи правильно все працює
console.log(document);
