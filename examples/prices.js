import hexaone from '../index.js'; // use import hexaone from '@maze.st/hexa.one';

const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {
    let prices = await api.getPrices(730);
    console.log(prices);
  } catch (err) {
    console.log(err.message ?? err);
  }
})();
