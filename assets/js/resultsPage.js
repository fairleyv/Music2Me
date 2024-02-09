let lyr = document.getElementById("lyr")
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime", requestOptions)
    .then(response => response.text())
    .then(result => lyr.textContent= result)
    .catch(error => console.log('error', error));



    