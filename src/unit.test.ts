import { spawn } from "child_process";
import SuperTest from "supertest";
import Path, { dirname } from "path";
import { fileURLToPath } from "url";
import { main } from "./main";

describe("executes tests against App", function () {
  test("should emit a GET request as 200 (OK) status", function () {
    return SuperTest(main())
      .get("/")
      .expect(({ status, text }) => {
        expect(status).toEqual(200);
        expect(text).toEqual("Such foo, much bar.");
      });
  });

  test("should initialize App without any Errors", async function () {
    const { env, platform, kill } = process;
    env.PORT = "0";

    // TODO: move Boolean & localeCompare in services
    const win = Boolean(platform.localeCompare("win32"));
    const cmd: string = win ? ".cmd" : "";
    const url: string = fileURLToPath(import.meta.url);
    const dir: string = dirname(url);
    const idx: string = Path.resolve(dir, "main.ts");
    const exe = `./node_modules/.bin/ts-node${cmd}`;
    const { pid = 0 } = spawn(exe, [idx]) || 0;

    expect(pid).toBeDefined();

    kill(pid, "SIGTERM");
  });
});
