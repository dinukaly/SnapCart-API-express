const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '..', '..', '.env') });

const isProduction = process.env.NODE_ENV === 'production';

const requireInProduction = (name, fallback) => {
  const value = process.env[name] || fallback;

  if (isProduction && !value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

// Development defaults preserve the current local prototype behavior.
const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  mongoUri: requireInProduction(
    'MONGO_URI',
    'mongodb://127.0.0.1:27017/quick_cart_db'
  ),
  clientUrl: process.env.CLIENT_URL || '*',
  jwtAccessSecret: requireInProduction('JWT_ACCESS_SECRET'),
  jwtRefreshSecret: requireInProduction('JWT_REFRESH_SECRET'),
  jwtAccessExpires: process.env.JWT_ACCESS_EXPIRES || '15m',
  jwtRefreshExpires: process.env.JWT_REFRESH_EXPIRES || '7d',
};

module.exports = { env };
