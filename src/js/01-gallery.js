import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const ImagesMarkup = createImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', ImagesMarkup);

function createImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
