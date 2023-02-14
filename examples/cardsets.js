import hexaone from '../index.js'; // use import hexaone from '@maze.st/hexa.one';

const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

(async () => {
  try {
    let items = await api.getItems(753);
    let sets = Object.values(items.result.items).reduce(function (obj, item) {
      if (item.type.includes('Trading Card') && !item.type.includes('Foil Trading Card') && !item.type.includes('Mystery Trading Card') && !item.type.includes('Mystery Foil Trading Card')) {
        let cat = item.type.replace('Trading Card', '').trim();
        obj[cat] = obj[cat] || [];
        obj[cat].push(item.market_hash_name);
      }
      return obj;
    }, {});
    console.log(sets);
  } catch (err) {
    console.log(err.message ?? err);
  }
})();
