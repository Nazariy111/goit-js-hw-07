const itemsOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsOfCategories.length}`);

for (const item of itemsOfCategories) {
    const categorie = item.querySelector("h2");
    console.log(`Categorie: ${categorie.textContent}`);

    const elementsOfCategorie = item.querySelectorAll("li");
    console.log(`Elements: ${elementsOfCategorie.length}`);
}