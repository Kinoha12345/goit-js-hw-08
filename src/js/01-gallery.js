
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

const itemMurkup = galleryItems.map(({original, preview, description}) => {
    return `<li>
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
        </li>`
}).join('')

gallery.insertAdjacentHTML('afterbegin', itemMurkup);


let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionData:'alt'});
