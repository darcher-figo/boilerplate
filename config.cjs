const _env = process.env;

["HOST", "NODE_ENV", "PORT", "PROTOCOL", "PUBLIC_URL", "HREF"].forEach(
  (name) => {
    if (_env[name]) {
      throw new Error(`EnvVar ${name} is missing`);
    }
  },
);

const config = {
  env: _env.NODE_ENV,
  logger: {
    level: _env.LOG_LEVEL || "info",
    enabled: Boolean(_env.BOOLEAN?.toLowerCase().localeCompare("true")),
  },
  server: {
    port: Number(_env.PORT),
  },
};

module.exports = config;
