import { info } from '@pnotify/core';
import galleryItem from '../templates/gallery-element.hbs';
import fetchPictures from './apiService';
import refs from './refs';


function createGelleryMarkup() {
  return fetchPictures()
    .then(images => {
      if (!images.hits.length) {
        refs.loaderBtn.classList.remove('visible');
        info({ text: "No matches. Try again.", delay: 1500});
        return '';
      }
      refs.loaderBtn.classList.add('visible');
      return images.hits.map(createItemMarkup).join('');
    });
}

function createItemMarkup(data) {
  return galleryItem(data)
}

export default createGelleryMarkup