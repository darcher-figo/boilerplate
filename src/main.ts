#!/usr/bin/env node

import "dotenv/config";
import {
  createServer,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from "http";
import { resolve } from "path";
import { fileURLToPath } from "url";

const _isCLI = Boolean(
  resolve(process.argv[1]).localeCompare(
    resolve(fileURLToPath(import.meta.url)),
  ),
);

console.info(_isCLI);

export function main(): Server<
  typeof IncomingMessage,
  typeof ServerResponse
> {
  const server = createServer((_, response): void => {
    response.setHeader("content-type", "text/plain;charset=utf8");
    response.writeHead(200, "OK");
    response.end("Such foo, much bar.");
  });

  if (_isCLI) {
    server.listen(parseInt(`${process.env.PORT || 6969}`));
  }

  return server;
}

if (_isCLI) {
  main();
}

export default main;
