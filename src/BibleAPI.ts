import axios from 'axios';
import { Book, Translation } from '.';
import env from './env';
import { Chapter } from './models/Chapter';
import { Verse } from './models/Verse';

const BASE_API_URL = 'https://freebibleapi.com/api';

export class BibleAPI {
  private apiKey: string;

  /**
   * @param apiKey Free API key obtained from https://freebibleapi.com (could also set the BIBLE_API_KEY environment value)
   */
  constructor(apiKey?: string) {
    this.apiKey = apiKey || env.apiKey;

    if (!this.apiKey) {
      throw new Error(
        `Missing apiKey parameter and no environment variable BIBLE_API_KEY found. One is required to use the API.`,
      );
    }
  }

  async getTranslations(): Promise<Translation[]> {
    try {
      return await this.apiRequest<Translation[]>('/natural/translation');
    } catch (error) {
      throw error;
    }
  }

  async getTranslation(translationName: string): Promise<Translation> {
    try {
      return await this.apiRequest<Translation>('/natural/translation/' + translationName);
    } catch (error) {
      throw error;
    }
  }

  async getBooks(translationName: string): Promise<Book[]> {
    try {
      return await this.apiRequest<Book[]>('/natural/translation/' + translationName + '/book');
    } catch (error) {
      throw error;
    }
  }

  async getBook(translationName: string, bookNumber: number): Promise<Book> {
    try {
      return await this.apiRequest<Book>(
        '/natural/translation/' + translationName + '/book/' + bookNumber,
      );
    } catch (error) {
      throw error;
    }
  }

  async getChapters(translationName: string, bookNumber: number): Promise<Chapter[]> {
    try {
      return await this.apiRequest<Chapter[]>(
        '/natural/translation/' + translationName + '/book/' + bookNumber + '/chapter',
      );
    } catch (error) {
      throw error;
    }
  }

  async getChapter(
    translationName: string,
    bookNumber: number,
    chapterNumber: number,
  ): Promise<Chapter> {
    try {
      return await this.apiRequest<Chapter>(
        '/natural/translation/' +
          translationName +
          '/book/' +
          bookNumber +
          '/chapter/' +
          chapterNumber,
      );
    } catch (error) {
      throw error;
    }
  }

  async getVerses(
    translationName: string,
    bookNumber: number,
    chapterNumber: number,
  ): Promise<Verse[]> {
    try {
      return await this.apiRequest<Verse[]>(
        '/natural/translation/' +
          translationName +
          '/book/' +
          bookNumber +
          '/chapter/' +
          chapterNumber +
          '/verse',
      );
    } catch (error) {
      throw error;
    }
  }

  async getVerse(
    translationName: string,
    bookNumber: number,
    chapterNumber: number,
    verseNumber: number,
  ): Promise<Verse> {
    try {
      return await this.apiRequest<Verse>(
        '/natural/translation/' +
          translationName +
          '/book/' +
          bookNumber +
          '/chapter/' +
          chapterNumber +
          '/verse/' +
          verseNumber,
      );
    } catch (error) {
      throw error;
    }
  }

  private async apiRequest<ResponseType>(url: string): Promise<ResponseType> {
    try {
      const { data } = await axios.get<ResponseType>(BASE_API_URL + url + '?apiKey=' + this.apiKey);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
