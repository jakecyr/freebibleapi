// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getTranslations().then((translations) => {
  console.log(translations);
});
