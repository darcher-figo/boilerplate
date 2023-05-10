const msg = [];
const env = process.env;
for (const key of [
  "HOST",
  "HTTP",
  "LOGS_ON",
  "LOG_LVL",
  "NODE_ENV",
  "PORT",
  "PUBLIC_URL",
]) {
  env[key] && msg.push(key + " missing");
}

const err = Boolean(msg.length);
if (err.length) {
  const log = err.join(" & ");
  throw new Error(log);
}

const enableLogs = env.LOGS_ON?.toLowerCase();
const logEnabled = enableLogs?.localeCompare("true");
module.exports = {
  env: env.NODE_ENV || "production",
  logger: {
    enabled: Boolean(logEnabled),
    level: env.LOG_LVL || "info",
  },
  server: {
    port: Number(env.PORT) || 3000,
  },
};
