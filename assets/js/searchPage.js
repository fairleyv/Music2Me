
// function callApi() {
//     var useArtist = document.getElementById("artistChoice").value;
//     var useSong = document.getElementById("songChoice").value;
//     console.log("useArtist: " + useArtist);
//     console.log("useSong: " + useSong);
//     var url = "https://api.lyrics.ovh/v1/" + useArtist + "/" + useSong;
//     console.log(url);
//   }

  function callApi() {
    var artist = document.getElementById("artistChoice").value;
    var song = document.getElementById("songChoice").value;
    console.log(artist);
    console.log(song);
    var artistChosen = String(artist);
    var songChosen = String(song);
    var useArtist = artistChosen.replace(/\s/g, "%20");
    var useSong = songChosen.replace(/\s/g, "%20");
    console.log("useArtist: " + useArtist);
    console.log("useSong: " + useSong);
    var lyricUrl = "https://api.lyrics.ovh/v1/" + useArtist + "/" + useSong;
    console.log(lyricUrl);
    let dataUrl = "https://www.stands4.com/services/v2/lyrics.php?uid=12350&tokenid= NNY94NSXkyAeIHuK&term=" + useSong + "&artist=" + useArtist + "&format=json";
    console.log(dataUrl);
    
    location.assign('./resultsPage.html?q=' + useArtist + '&song=' + useSong);

    if (!artist || !song) {
      console.error('Both fields need to be filled!');
    } else {
      location.assign('./resultsPage.html?q=' + useArtist + '&song=' + useSong);
    }
  }

// Use Url to post lyrics in results page

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

