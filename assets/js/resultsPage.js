let lyr = document.getElementById("lyr");
let lyrLink = document.getElementById('lyricLink');
let songHeader = document.getElementById('song-header');
let artistName = document.getElementById('artist');
let albumName = document.getElementById('albumName');
let songLink =document.getElementById('songLink');
let artistLink = document.getElementById('artistLink');
let albumLink = document.getElementById('albumLink');
let songName = document.getElementById('songName')
let artist = document.getElementById('artistName')
let requestUrl = "https://www.stands4.com/services/v2/lyrics.php?uid=12350&tokenid= NNY94NSXkyAeIHuK&term=Nobody&artist=Mitski&format=json"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", requestOptions)
    .then(response => response.text())
    .then(result => lyr.textContent = result)
    .catch(error => console.log('error', error));

var myHeaders = new Headers();
myHeaders.append("Cookie", "AWSALB=HCCBIl/YMPEokNPQqWyXLLJlXF0eS9zUX8TWsIoieJipsqCiJ1BHz39xj9lpPbuC3Qxfduv+gkxAxWYEVmgcleW52q4ZagvHr6/efqAwGL00KXJ1iY99kryuR6Mh; AWSALBCORS=HCCBIl/YMPEokNPQqWyXLLJlXF0eS9zUX8TWsIoieJipsqCiJ1BHz39xj9lpPbuC3Qxfduv+gkxAxWYEVmgcleW52q4ZagvHr6/efqAwGL00KXJ1iY99kryuR6Mh; PHPSESSID=gcks9adoakan7efo6dch549bss");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
function songData (requestUrl) {
    fetch(requestUrl, requestOptions).then(function (response) {
        console.log(response);
        return response.json();
    })
    .then (function (data) {
        songHeader.textContent = data.result[0].song;
        artistName.textContent = data.result[0].artist;
        songName.textContent = data.result[0].song;
        artist.textContent = data.result[0].artist;
        albumName.textContent = data.result[0].album;
        songLink.textContent = data.result[0]['song-link'];
        albumLink.textContent = data.result[0]['album-link'];
        artistLink.textContent = data.result[0]['artist-link'];
    })
}

songData (requestUrl);