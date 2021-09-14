// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getBook('KJV', 1).then((genesis) => {
  console.log(genesis);
});
