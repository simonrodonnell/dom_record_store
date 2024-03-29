document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  // deleteAllButton
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
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

  //create artist label
  const artistLabel = document.createElement('p');
  artistLabel.textContent = "Artist:"
  recordStoreItem.appendChild(artistLabel);

  //create artist info
  const artist = document.createElement('h2');
  artist.textContent = form.artist.value;
  recordStoreItem.appendChild(artist);

  //create album label
  const albumLabel = document.createElement('p');
  albumLabel.textContent = "Album:";
  recordStoreItem.appendChild(albumLabel);

  //create album info
  const album = document.createElement('h3');
  album.textContent = form.album.value;
  recordStoreItem.appendChild(album);

  //create genre label
  const genreLabel = document.createElement('p');
  genreLabel.textContent = "Genre:"
  recordStoreItem.appendChild(genreLabel);

  //create genre info
  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  recordStoreItem.appendChild(genre);

  //create format info
  const format = document.createElement('p');
  format.textContent = form.format.value;
  recordStoreItem.appendChild(format);

  return recordStoreItem;

}

//delete all button
const handleDeleteAllClick = function (event) {
  const recordCatalogue = document.querySelector('#record-catalogue');
  recordCatalogue.innerHTML = '';
}
