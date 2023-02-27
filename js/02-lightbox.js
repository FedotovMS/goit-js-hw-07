import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a 
          class="gallery__item" 
          href="${original}">
        <img 
          class="gallery__image" 
          src="${preview}" 
          alt="${description}" />
        </a>
      </li>
    `;
    })
    .join("");
}

const galleryContainer = document.querySelector("ul.gallery");

const imgMarkup = createGaleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

var gallery = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
