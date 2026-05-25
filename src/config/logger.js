const formatError = (error) => ({
  name: error.name,
  message: error.message,
  stack: process.env.NODE_ENV === 'production' ? undefined : error.stack,
});

const writeLog = (level, message, meta = {}) => {
  const payload = {
    level,
    message,
    timestamp: new Date().toISOString(),
    ...meta,
  };

  if (payload.error instanceof Error) {
    payload.error = formatError(payload.error);
  }

  const serialized = JSON.stringify(payload);

  if (level === 'error') {
    console.error(serialized);
    return;
  }

  console.log(serialized);
};

// This keeps logging structured until Phase 1 dependency cleanup adds Pino or Winston.
const logger = {
  info: (message, meta) => writeLog('info', message, meta),
  warn: (message, meta) => writeLog('warn', message, meta),
  error: (message, meta) => writeLog('error', message, meta),
};

module.exports = { logger };
