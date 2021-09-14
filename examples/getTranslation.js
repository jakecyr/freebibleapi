// @ts-check
const { BibleAPI } = require('../dist/index');

const bibleApi = new BibleAPI();

bibleApi.getTranslation('KJV').then((translation) => {
  console.log(translation);
});
