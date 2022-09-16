import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const onGalleryRef = document.querySelector(".gallery");
const onImgRef = document.querySelector(".gallery__image");

const createdGalleryItem = galleryItems.map((item) => {
  return `<div><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></div>`;
});

const createdGallery = createdGalleryItem.join("");
onGalleryRef.insertAdjacentHTML("beforeend", createdGallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionData: "alt",
});
