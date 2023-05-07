import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListEl = document.querySelector('.gallery')


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

galleryListEl.insertAdjacentHTML('afterbegin', galleryElements);



galleryListEl.addEventListener('click', onClickGalleryList)



function onClickGalleryList(event){
  
  event.preventDefault()

  if(event.target.nodeName !== "IMG"){
   return
  }

  const imageLink = event.target.dataset.source
  
  const instance = basicLightbox.create(
    `<img src="${imageLink}" width="800" height="600">`
  )
  instance.show()

  galleryListEl.addEventListener('keydown', (e) => {
    if(e.code !== 'Escape'){
      return
    }
    instance.close()
  })

}

console.log(galleryItems);

