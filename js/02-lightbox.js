import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')


const galleryElements = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
).join('');

galleryListEl.insertAdjacentHTML('afterbegin', galleryElements);

const lightbox = new SimpleLightbox('.gallery a', { captionData: 'alt', captionDelay: 250 });

console.log(galleryItems);
