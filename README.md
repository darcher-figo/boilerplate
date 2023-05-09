# Vanilla Typescript [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="164">](https://www.independencepetgroup.com/)

This <abbr title="Vanilla TS - Project Starter Kit">VT|PSK</abbr> is a Proof of Concept (POC) to showcase a stable vanilla typescript frontend implementation approach with [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Our goals is the trial and thorough documentation of risk-reward benefit analysis over the course of this projects lifespan.

<br />

> Vanilla isn't just for a flavor burst in your sugarlicious coffee addiction, it excels in simiplifying cross platform projects, too!

<hr />

## Table of contents

- [Vanilla Typescript ](#vanilla-typescript-)
  - [Table of contents](#table-of-contents)
  - [Installing / Getting started](#installing--getting-started)
    - [Commands](#commands)
      - [run to bundle app source into the `/dist` folder](#run-to-bundle-app-source-into-the-dist-folder)
      - [use to execute codebase in higher environments over pipeline](#use-to-execute-codebase-in-higher-environments-over-pipeline)
      - [run to spin up a localize instance of the app at `localhost:8080`](#run-to-spin-up-a-localize-instance-of-the-app-at-localhost8080)
  - [Developing](#developing)
    - [Built With](#built-with)
    - [Prerequisites](#prerequisites)
    - [Setting up Dev](#setting-up-dev)
    - [Building](#building)
    - [Deploying / Publishing](#deploying--publishing)
  - [Versioning](#versioning)
  - [Configuration](#configuration)
    - [Environment Variables](#environment-variables)
  - [Tests](#tests)
  - [Style guide](#style-guide)
    - [trigger this command to align the codebase format to our standardizations (code changes may occur)](#trigger-this-command-to-align-the-codebase-format-to-our-standardizations-code-changes-may-occur)
    - [runs a linter over entire codebase (code changes may occur)](#runs-a-linter-over-entire-codebase-code-changes-may-occur)
      - [when problems arise in the package dependencies removing the following and doing a clean install # will resolve a plethora of time consuming tasks](#when-problems-arise-in-the-package-dependencies-removing-the-following-and-doing-a-clean-install--will-resolve-a-plethora-of-time-consuming-tasks)
      - [executes the entire playwright E2E and Jest Unit Testing suite these tasks generate a wealth of information # stored in the `/coverage` directory](#executes-the-entire-playwright-e2e-and-jest-unit-testing-suite-these-tasks-generate-a-wealth-of-information--stored-in-the-coverage-directory)
      - [this isn't technically logs; however, it is a safe-guard to ensure git commit messages adhere to high-quality standards (subject to change, does make assumptions)](#this-isnt-technically-logs-however-it-is-a-safe-guard-to-ensure-git-commit-messages-adhere-to-high-quality-standards-subject-to-change-does-make-assumptions)
  - [Api Reference](#api-reference)
  - [Database](#database)
  - [Licensing](#licensing)

<hr />

<br />
<table>
  <tr>
    <td align="center" valign="middle">
      <img src="./img/safe.svg" width="16"  valign="text-top"> <a href=
      "./docs/CODEOWNER.md"><sup><sub><b>CODE OWNERS</b></sub></sup></a>
    </td>
    <td align="center" valign="middle">
      <img src="./img/sign.svg" width="16"  valign="text-top"> <a href=
      "./docs/CODE_OF_CONDUCT.md"><sup><sub><b>CODE OF
      CONDUCT</b></sub></sup></a>
    </td>
    <td align="center" valign="middle">
      <img src="./img/gift.svg" width="16"  valign="text-top"> <a href=
      "./docs/CONTRIBUTING.md"><sup><sub><b>CONTRIBUTION
      RULES</b></sub></sup></a>
    </td>
    <td align="center" valign="middle">
      <img src="./img/star.svg" width="16"  valign="text-top"> <a href=
      "./docs/README.md"><sup><sub><b>BEST PRACTICES</b></sub></sup></a>
    </td>
    <td align="center" valign="middle">
      <img src="./img/note.svg" width="16"  valign="text-top"> <a href=
      "./README.md"><sup><sub><b>DOCUMENTATION</b></sub></sup></a>
    </td>
  </tr>
  <tr>
    <td colspan="5" align="left" valign="top">

## Installing / Getting started

Here is a quick introduction of the _minimal_ setup you need to get a `hello world` up & running locally.

```shell

# move the source into your development environment

gh repo clone darcher-figo/boilerplate

# step into the directory

cd boilerplate

# install dependencies & align tooling versions
# ...starting with nodejs (>=v18.x for this project)

nvm use

# next, install the package dependencies required to run

npm i

# check the notes to see if a .env (environment variable)
# setup step is necessary.

cd docs ls

# that should be all you need to get spun up
# reach out to @darcher-figo if questions arise

```

<br />

### Commands

#### run to bundle app source into the `/dist` folder

```shell
npm build

# RUNS
#   tsc --project tsconfig.build.json
```

#### use to execute codebase in higher environments over pipeline

```shell
npm start

# RUNS
#   node dist/src/main.js
```

#### run to spin up a localize instance of the app at `localhost:8080`

```shell
npm run dev

# RUNS
#   nodemon --ext '*' --exec
#   node --experimental-specifier-resolution=node --loader ts-node/esm
#   src/main.ts
```

Here you should say what actually happens when you execute the code above.

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Developing

### Built With

List main libraries, frameworks used including versions (React, Angular etc...)

<br />

### Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

<br />

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

<br />

### Building

If your project needs some additional steps for the developer to build the project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets executed.

<br />

### Deploying / Publishing

give instructions on how to build and release a new version In case there's some step you have to take that publishes this project to a server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Versioning

Will likely implement something to automate this process away, added a few options below, but haven't settled on the approach yet.

- [SemVer](http://semver.org/)

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Configuration

### Environment Variables

More to come for this area, I intend to incorperate the `dotenv` library to aid in easy dynamic globally accessible data points.

```javascript
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
```

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Tests

Describe and show how to run the tests with code examples. Explain what these tests test and why.

```shell
Give an example
```

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Style guide

### trigger this command to align the codebase format to our standardizations (code changes may occur)

```shell
npm run format

# RUNS
#   prettier --write --ignore-unknown
```

<br />

### runs a linter over entire codebase (code changes may occur)

```shell
npm run lint

# RUNS
#   eslint **/*.{ts,tsx} --fix
```

<br />

#### when problems arise in the package dependencies removing the following and doing a clean install # will resolve a plethora of time consuming tasks

```shell
npm run clean

# RUNS
#   rm -rf node_modules &&
#   rm -rf dist &&
#   rm -rf coverage &&
#   rm -rf package-lock.json
```

<br />

#### executes the entire playwright E2E and Jest Unit Testing suite these tasks generate a wealth of information # stored in the `/coverage` directory

```shell
npm run test

# RUNS
#   jest **/*.{ts,tsx} --colors --coverage
```

<br />

#### this isn't technically logs; however, it is a safe-guard to ensure git commit messages adhere to high-quality standards (subject to change, does make assumptions)

```shell
npm run logs

# RUNS
#   npx
#     --no-install commitlint
#     --config commitlint.config.cjs
#     --edit

```

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Api Reference

> Will update with details on where fixtures & mocked data resides in project when I get that work implemented.

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Database

Linking up to a DB for this effort is probably not necessary, I will be building out fixtures/mocks to display real data...

Due to how small this project is, avoiding all the configurations and complexities that come along with integrating a full ecosystem.

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Licensing

Licensing is likely unnecessary for this initiative but may get something included here.

  <hr />
    <p>
      <table align="right">
        <tr>
          <th colspan="2">
            <a title="return to top" href="#vanilla-typescript-">
              <sup>
                <sub>
                  TABLE OF CONTENTS
                </sub>
              </sup>
              &nbsp; <img alt="arrow up" src="./img/arrow.svg" width="9.5" valign="baseline" />
            </a>
          </th>
        </tr>
      </table>
    </p>
  </td>
</tr>
<tr>
  <td align="center" valign="middle">
    <img src="./img/safe.svg" width="16"  valign="text-top"> <a href=
    "./docs/CODEOWNER.md"><sup><sub><b>CODE OWNERS</b></sub></sup></a>
  </td>
  <td align="center" valign="middle">
    <img src="./img/sign.svg" width="16"  valign="text-top"> <a href=
    "./docs/CODE_OF_CONDUCT.md"><sup><sub><b>CODE OF
    CONDUCT</b></sub></sup></a>
  </td>
  <td align="center" valign="middle">
    <img src="./img/gift.svg" width="16"  valign="text-top"> <a href=
    "./docs/CONTRIBUTING.md"><sup><sub><b>CONTRIBUTION
    RULES</b></sub></sup></a>
  </td>
  <td align="center" valign="middle">
    <img src="./img/star.svg" width="16"  valign="text-top"> <a href=
    "./docs/README.md"><sup><sub><b>BEST PRACTICES</b></sub></sup></a>
  </td>
  <td align="center" valign="middle">
    <img src="./img/note.svg" width="16"  valign="text-top"> <a href=
    "./README.md"><sup><sub><b>DOCUMENTATION</b></sub></sup></a>
  </td>
</tr></table>

<table align="center"><tr>
  <td><i><u>υι</u>∫</i><b>κɪτ</b></td><td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td>
    <td align="center">
      <a title="return to top" href="#vanilla-typescript-">Return to Top</a>
    </td>
  </tr>
</table>