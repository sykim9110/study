var api = {
  getRovers() {
    var url = 'https://api.nasa.gov/planetary/apod?api_key=7BRnMlSIOI3N5TMcrCR3nSDkiqlvd9hGHZyvxNqG';
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
