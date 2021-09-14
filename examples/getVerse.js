// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getVerse('KJV', 1, 1, 1).then((genesisFirstVerse) => {
  console.log(genesisFirstVerse);
});
