import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const onGalleryRef = document.querySelector(".gallery");
const onImgRef = document.querySelector(".gallery__image");

const createdGalleryItem = galleryItems.map((item) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
});

const createdGallery = createdGalleryItem.join("");

onGalleryRef.insertAdjacentHTML("beforeend", createdGallery);

onGalleryRef.addEventListener("click", handleRef);

function handleRef(evt) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${evt.target.dataset.source}" />
	`
  );
  if (evt.target.nodeName !== "IMG") {
    return;
  } else {
    instance.show();
  }
}
