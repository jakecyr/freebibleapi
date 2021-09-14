// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getChapters('KJV', 1).then((genesisChapters) => {
  console.log(genesisChapters);
});
