document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // deleteAllButton

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const recordStoreItem = createRecordStoreItem(event.target);
  const recordStoreCatalogue = document.querySelector('#record-catalogue');
  recordStoreCatalogue.appendChild(recordStoreItem);

  event.target.reset();
}

const createRecordStoreItem = function(form) {

  //create parent element
  const recordStoreItem =
  document.createElement('li');
  recordStoreItem.classList.add('record-store-item');

  //create artist info
  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  recordStoreItem.appendChild(artist);

  //create album info
  const album = document.createElement('h3');
  album.textContent = form.album.value;
  recordStoreItem.appendChild(album);

  //create genre info
  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  recordStoreItem.appendChild(genre);

  return recordStoreItem;

}
