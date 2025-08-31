require('dotenv').config({ path: './src/core/config/config.env' });

exports.PORT = process.env.PORT || 5000;
exports.ENV = process.env.NODE_ENV || 'development';
exports.PASSWORD = process.env.PASSWORD;
exports.DB_URL = process.env.DB_URL;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
exports.JWT_COOKIE_EXPIRES_IN = process.env.JWT_COOKIE_EXPIRES_IN;
exports.EMAIL_USERNAME = process.env.EMAIL_USERNAME;
exports.EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
exports.EMAIL_HOST = process.env.EMAIL_HOST;
exports.EMAIL_PORT = process.env.EMAIL_PORT;