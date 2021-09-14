// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getBooks('KJV').then((books) => {
  console.log(books);
});
