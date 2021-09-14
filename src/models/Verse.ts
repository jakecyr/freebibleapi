/**
 * A verse from the Bible
 */
export interface Verse {
  /**
   * The actual verse text
   */
  content: string;

  /**
   * Number of the verse in the chapter
   */
  verse_number: number;
}
