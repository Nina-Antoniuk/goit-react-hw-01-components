import refs from './refs';
import { page } from './handlers';

const END_POINT = "https://pixabay.com/api/";

function fetchPictures() {
  return fetch(`${END_POINT}?image_type=photo&orientation=horizontal
  &q=${refs.searchInput.value}&page=${page}&per_page=12
  &key=23078743-735eb07845251e1f6bfe1c97b`)
    .then(response => response.json())
}

export default fetchPictures