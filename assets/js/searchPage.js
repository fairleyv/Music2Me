
function saveSearches() {
  let artistChoiceEl = document.getElementById('search').ariaValueMax;
  let songChoiceEl = document.getElementById('songChoice').ariaValueMax;
  if (artistChoiceEl !== '') {
    let pastArtistSearches = JSON.parse(localStorage.getItem('pastArtistSearches')) || [];
    pastArtistSearches.push(artistChoiceEl);
    localStorage.setItem('pastArtistSearches', JSON.stringify(pastArtistSearches));
  };

  if (songChoiceEl !== '') {
    let pastSongSearches = JSON.parse(localStorage.getItem('pastSongSearches')) || [];
    pastSongSearches.push(searchEl);
    localStorage.setItem('pastSongSearches', JSON.stringify(pastSongSearches));
  };
}

saveSearches()