const app = require('./app');
const { env } = require('./config/env');
const { connectDatabase } = require('./config/database');
const { logger } = require('./config/logger');

const startServer = async () => {
  await connectDatabase();

  app.listen(env.port, () => {
    logger.info('Server started', {
      port: env.port,
      environment: env.nodeEnv,
    });
  });
};

startServer().catch((error) => {
  logger.error('Server startup failed', { error });
  process.exit(1);
});
