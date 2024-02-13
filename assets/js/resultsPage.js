let lyr = document.getElementById("lyr");
let lyrLink = document.getElementById('lyricLink');
let songHeader = document.getElementById('song-header');
let artistName = document.getElementById('artist');
let albumName = document.getElementById('albumName');
let songLink =document.getElementById('songLink');
let artistLink = document.getElementById('artistLink');
let albumLink = document.getElementById('albumLink');
let songName = document.getElementById('songName');
let artist = document.getElementById('artistName');
let prevSearches = document.getElementById('prevSearches');
    // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
var searchParamsArr = document.location.search.split('&');
let lastSearch = [];
var artistQuery = searchParamsArr[0].split('=').pop();
var songQuery = searchParamsArr[1].split('=').pop();
let artistLower = artistQuery.toLowerCase();
let songLower = songQuery.toLowerCase();
let storageKey = artistLower+songLower;
let tempComment = [];

if (localStorage.getItem(storageKey)== null){
    localStorage.setItem(storageKey, JSON.stringify([]))
}

let songDataUrl = "ttps://www.stands4.com/services/v2/lyrics.php?uid=12350&tokenid= NNY94NSXkyAeIHuK&term=Nobody&artist=Mitski&format=json"


document.getElementById("submit-button").addEventListener("click", function() {
    var inputText = document.getElementById("comment-input").value;
    var commentsDiv = document.getElementById("commentsOutput");
    var commentParagraph = document.createElement("p");
    commentParagraph.textContent = inputText;
    commentParagraph.classList.add("comment-box"); // Apply the styling to the comment box
    commentsDiv.appendChild(commentParagraph);

    tempComment = JSON.parse(localStorage.getItem(storageKey));

    tempComment.push([{
        'Comment': inputText,
     }])

    localStorage.setItem(storageKey, JSON.stringify(tempComment));

    document.getElementById("comment-input").value = ""; 

});


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getParams() {
  
    // Get the query and format values
    var artistQuery = searchParamsArr[0].split('=').pop();
    var songQuery = searchParamsArr[1].split('=').pop();

    let lyricsApiUrl = "https://api.lyrics.ovh/v1/" + artistQuery + "/" + songQuery;
    let songDataUrl = "ttps://www.stands4.com/services/v2/lyrics.php?uid=12350&tokenid= NNY94NSXkyAeIHuK&term=" + songQuery + "&artist=" + artistQuery + "&format=json";

    lyricApi(lyricsApiUrl);
    songData(songDataUrl);
    saveSearches();
}

function lyricApi (lyricsApiUrl) {
    fetch(lyricsApiUrl, requestOptions)
        .then(response => response.json())
        .then(result => {
            let lyrics = result.lyrics;

        // Split the lyrics by line breaks
            const lines = lyrics.split('\n');

        // Remove the first line
            lines.shift();

        // Join the remaining lines back together
            const modifiedLyrics = lines.join('\n').trim();

        // Format the modified lyrics with <br> tags
            const formattedText = modifiedLyrics.replace(/\n/g, '<br>');

            lyr.innerHTML = formattedText;
        })
        .catch(error => console.log('error', error));
}

var myHeaders = new Headers();
myHeaders.append("Cookie", "AWSALB=HCCBIl/YMPEokNPQqWyXLLJlXF0eS9zUX8TWsIoieJipsqCiJ1BHz39xj9lpPbuC3Qxfduv+gkxAxWYEVmgcleW52q4ZagvHr6/efqAwGL00KXJ1iY99kryuR6Mh; AWSALBCORS=HCCBIl/YMPEokNPQqWyXLLJlXF0eS9zUX8TWsIoieJipsqCiJ1BHz39xj9lpPbuC3Qxfduv+gkxAxWYEVmgcleW52q4ZagvHr6/efqAwGL00KXJ1iY99kryuR6Mh; PHPSESSID=gcks9adoakan7efo6dch549bss");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

function songData (songDataUrl) {
    fetch(songDataUrl, requestOptions).then(function (response) {
        return response.json();
    })
    .then (function (data) {
        songHeader.textContent = data.result[0].song;
        artistName.textContent = data.result[0].artist;
        songName.textContent = 'Song: ' + data.result[0].song;
        artist.textContent = 'Artist: ' + data.result[0].artist;
        albumName.textContent = 'Album: ' + data.result[0].album;
        songLink.textContent = 'Song Link: ' + data.result[0]['song-link'];
        albumLink.textContent = 'Album Link: ' + data.result[0]['album-link'];
        artistLink.textContent = 'Artist Link: ' + data.result[0]['artist-link'];
    })
}

function saveSearches() {
    let artistQuery = searchParamsArr[0].split('=').pop();
    let songQuery = searchParamsArr[1].split('=').pop();
    if (localStorage.getItem('prevSearches') == null){
        localStorage.setItem('prevSearches', []);
    } else {
        lastSearch = JSON.parse(localStorage.getItem('prevSearches'));
    }

    lastSearch.unshift([{
        'Artist': artistQuery,
        'Song': songQuery,
    }]);
    if (lastSearch.length > 5) {
        lastSearch.pop();
    }

    localStorage.setItem('prevSearches', JSON.stringify(lastSearch));
}

function printSearches() {
    for (each of lastSearch){
        let search = document.createElement('p');
        searchLink = document.createElement('a');
        searchLink.textContent = 'Artist: ' + each[0].Artist + '/ Song: ' + each[0].Song;
        searchLink.href = './resultsPage.html?q=' + each[0].Artist + '&song=' + each[0].Song;
        search.append(searchLink);
        prevSearches.append(search);        
    }
}

function printNotes() {
    savedNotes = JSON.parse(localStorage.getItem(storageKey))
    for (each of savedNotes){
        let commentsDiv = document.getElementById("commentsOutput");
        let commentParagraph = document.createElement("p");
        commentParagraph.textContent = each[0].Comment;
        commentParagraph.classList.add("comment-box"); // Apply the styling to the comment box
        commentsDiv.appendChild(commentParagraph);
    }
}

getParams();

printSearches() 

printNotes()
