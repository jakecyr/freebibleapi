// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getChapter('KJV', 1, 1).then((genesisChapterOne) => {
  console.log(genesisChapterOne);
});
