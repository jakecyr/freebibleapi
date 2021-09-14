// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getVerses('KJV', 1, 1).then((genesisOneVerses) => {
  console.log(genesisOneVerses);
});
