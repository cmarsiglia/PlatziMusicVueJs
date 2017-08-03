import config from './config'

const { apiKey } = config
const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

// Utilizando Arrow function
export default function getArtists(country) {

  const url = URL.replace(':country',country)
  return fetch(url)
  	.then(res => res.json())
  	.then(json => json.topartists.artist)
}

/*
export default function getArtists() {
  fetch(URL).then(function(res) {
    return res.json();
  }).then(function(json) {
   return json.topartists.artists
  });
}
*/
