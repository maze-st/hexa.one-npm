import hexaone from '../index.js'; // use import hexaone from '@maze.st/hexa.one';

const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {
    let inventory = await api.getInventory('76561198019728505', 730, 2);
    console.log(inventory);
  } catch (err) {
    console.log(err.message ?? err);
  }
})();
