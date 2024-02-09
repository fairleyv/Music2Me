let lyr = document.getElementById("lyr");
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", requestOptions)
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
