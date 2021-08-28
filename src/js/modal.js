import * as basicLightbox from 'basiclightbox';
import largeImage from '../templates/modal.hbs';


export function showLargeImage(src) {
  return  basicLightbox.create(largeImage({largeImageURL: src}))
}