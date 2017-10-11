const DB_HOST = 'localhost';
const DB_PORT = 27017;
const DB_NAME = 'hard-task';
const DB_USER = 'senpai';
const DB_PASS = 276492;
const DB_AUTH_SOURCE = 'admin';

module.exports = {
  PORT: 5678,
  JWT_SECRET: '私はあなたおすきです',
  DB_CONNECTION_STRING: 
    `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=${DB_AUTH_SOURCE}`,
  PASSWORD_REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/
}