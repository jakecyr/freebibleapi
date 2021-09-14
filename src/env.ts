import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const env = {
  apiKey: process.env.BIBLE_API_KEY,
};

export default env;
