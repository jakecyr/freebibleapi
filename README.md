# Bible API

NodeJS wrapper for the Free Bible API service ([https://freebibleapi.com](https://freebibleapi.com))

## Installation

Install the library with npm `npm install freebibleapi`.

## Authentication

1. Sign-up for a free API key at [https://freebibleapi.com](https://freebibleapi.com)
2. Create a .env file with `BIBLE_API_KEY=<your api key here>` or pass it into the `BibleAPI` class constructor

## Usage

### getTranslation

Get a single translation.

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const kjvTranslation: Translation = await bibleApi.getTranslation('KJV');
```

### getTranslations

Get a list of currently supported translations.

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const translations: Translation[] = await bibleApi.getTranslations();
```

### getBooks

Get a list of all books in a translation.

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const books: Book[] = await bibleApi.getBooks('KJV');
```

### getBook

Get a specific book from the Bible for a chosen translation.

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const genesis: Book = await bibleApi.getBook('KJV', 1);
```

### getChapters

Get all chapters in a book of the Bible

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const genesisChapters: Chapter[] = await bibleApi.getChapters('KJV', 1);
```

### getChapter

Get a chapter in a book of the Bible

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const genesisChapterOne: Chapter = await bibleApi.getBookChapter('KJV', 1, 1);
```

### getVerses

Get the verses in a chapter of the Bible

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const genesisChapterOneVerses: Verse[] = await bibleApi.getVerses('KJV', 1, 1);
```

### getVerse

Get a verses in a chapter of the Bible

```typescript
const { BibleAPI } = require('freebibleapi');

const bibleApi = new BibleAPI();

const genesisChapterOneVerseOne: Verse = await bibleApi.getVerse('KJV', 1, 1, 1);
```
