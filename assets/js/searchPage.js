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
    var url = "https://api.lyrics.ovh/v1/" + useArtist + "/" + useSong;
    console.log(url);
}

// Use Url to post lyrics in results page