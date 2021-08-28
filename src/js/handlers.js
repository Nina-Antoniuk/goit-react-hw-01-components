import { error } from '@pnotify/core';
import refs from './refs'
import createGelleryMarkup from './create-markup';
import { showLargeImage } from './modal';

export let page = 1;

export function imageLoadBtnHandler() {
  if (!refs.searchInput.value) {
    refs.gallery.innerHTML = '';
    refs.loaderBtn.classList.remove('visible');
    return
  }
  page = 1;
  createGelleryMarkup()
    .then(images => {
      refs.gallery.innerHTML = images;
    })
    .catch(err => {
      error({ text: err })
    })
}

export function loadMoreBtnHandler() {
  page += 1;
  createGelleryMarkup()
    .then(images => refs.gallery.insertAdjacentHTML('beforeend', images))
    .then(() => {
      refs.gallery.children[(page - 1) * 12].scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    })
    .catch(err => {
      error({ text: err })
    });
}

export function imageClickHandler(e) {
  if (e.target.nodeName !== 'IMG') {
    return
  }
  showLargeImage(e.target.dataset.largeimg).show()
}


