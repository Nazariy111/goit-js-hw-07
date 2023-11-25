const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");

for (const image of images) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-item");

  const imaging = document.createElement("img");
  imaging.classList.add("gallery-image");
  imaging.src = image.url;
  imaging.alt = image.alt;
  imaging.width = 360;
  imaging.height = 300;

  gallery.append(listItem);
  listItem.append(imaging);
}

//перевіряємо структуру HTML-документа, чи правильно виконана вкладеність і задані класи
console.log(document);