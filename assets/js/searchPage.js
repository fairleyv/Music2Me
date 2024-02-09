function callApi() {
    var useArtist = document.getElementById("artistChoice").value;
    var useSong = document.getElementById("songChoice").value;
    console.log("useArtist: " + useArtist);
    console.log("useSong: " + useSong);
    var url = "https://api.lyrics.ovh/v1/" + useArtist + "/" + useSong;
    console.log(url);
}

