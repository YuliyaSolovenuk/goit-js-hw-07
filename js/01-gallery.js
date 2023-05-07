import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery')
console.log(galleryList)

const galleryElements = galleryItems.map(({preview, original, description}) => 
`<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryElements);
console.log(galleryList);

galleryList.addEventListener('click', onClickGalleryList)

function onClickGalleryList(event){
    let imageLink;
    if(event.target.nameNode === "LI"){

        imageLink = event.target.li.getAttribute('href')
        console.log(imageLink)
    }
}

console.log(galleryItems);


