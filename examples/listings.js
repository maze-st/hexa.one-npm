import hexaone from '../index.js'; // use import hexaone from '@maze.st/hexa.one';

const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {
    let listings = await api.getListings(730);
    console.log(listings);
  } catch (err) {
    console.log(err.message ?? err);
  }
})();
