import { galleryItems } from "./gallery-items.js";
// Change code below this line

//create HTML markup
function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

// handle click on img

const galleryContainer = document.querySelector("div.gallery");

const imgMarkup = createGaleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imgMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

let activeModal = null;

function onGalleryContainerClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const originalSrc = e.target.dataset.source;
  const modal = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">
  `);

  activeModal = modal;
  modal.show();

  document.addEventListener("keydown", onEscapeKeyDown);
}

// disable default link behavior
const galleryLinks = document.querySelectorAll(".gallery__item");
galleryLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// handle escape key press
function onEscapeKeyDown(e) {
  if (e.code !== "Escape") {
    return;
  }

  activeModal.close();
  activeModal = null;

  document.removeEventListener("keydown", onEscapeKeyDown);
}
