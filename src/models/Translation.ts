/**
 * A translation is a version of Biblical text
 */
export interface Translation {
  /**
   * Title of translation (ex. King James Version)
   */
  name: string;

  /**
   * Abbreviation of Translation (ex. KJV)
   */
  short_name: string;

  /**
   * Description of the version
   */
  description: string;

  /**
   * Language code (ex. en)
   */
  language: string;

  /**
   * Translation revision number
   */
  revision: number;
}
