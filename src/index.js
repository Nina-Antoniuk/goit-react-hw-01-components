import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import { debounce } from 'lodash';
import refs from './js/refs'
import { imageLoadBtnHandler, loadMoreBtnHandler, imageClickHandler } from './js/handlers';


refs.searchInput.addEventListener('input', debounce(imageLoadBtnHandler, 500)); 

refs.loaderBtn.addEventListener('click', loadMoreBtnHandler);

refs.gallery.addEventListener('click', imageClickHandler);

