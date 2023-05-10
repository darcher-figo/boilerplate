# <sup><abbr title="Vanilla Typescript">VTS</abbr> Starter Kit</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">](https://www.independencepetgroup.com/)

> <sup><sub>**Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!</sub></sup>

This vanilla boilerplate is a <u>Proof of Concept</u> to showcase a stable, simplistic, adaptable implementation of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), natively avaliable in the javascript API.

**OBJECTIVE**<br />
*Conduct* a <u>risk</u> vs. <u>reward</u> analysis and *document* the processes.

---

## Table of contents

<table align="right">
<tr><th><sup><sub>DOCUMENTS</sub></sup></th></tr>
<tr><td><a href="./docs/CODE_OF_CONDUCT.md"><img src="./img/sign.svg" width="16" valign="text-top"> <sup><sub><b>ETHICS & ETHOS</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CONTRIBUTING.md"><img src="./img/gift.svg" width="16" valign="text-top"> <sup><sub><b>CONTRIBUTORS</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CODEOWNER.md"><img src="./img/safe.svg" width="16" valign="text-top"> <sup><sub><b>CODE OWNERS</b></sub></sup></a></td></tr>
<tr><td><a href="./README.md"><img src="./img/note.svg" width="16" valign="text-top"> <sup><sub><b>MAIN README</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/README.md"><img src="./img/star.svg" width="16" valign="text-top"> <sup><sub><b>GUIDELINES</b></sub></sup></a></td></tr>
</td></tr></table>

- [VTS Starter Kit ](#vts-starter-kit-)
  - [Table of contents](#table-of-contents)
  - [Initial Setup](#initial-setup)
    - [Commands](#commands)
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
  - [API Reference](#api-reference)
  - [Database](#database)
  - [Licensing](#licensing)


## Initial Setup

A quick introduction and step-by-step walk through; everything you need to get an up-to-date local instance installed.

<table><tr align="left">
  <th scope="col">1️⃣ &nbsp; Clone project</th>
  <th scope="col">2️⃣ &nbsp; Version alignment</th>
  <th scope="col">3️⃣ &nbsp; Install packages</th>
  </tr><tr><td valign="top">

  > *Clone* and traverse to project directory.

  ```sh
  gh repo clone darcher-figo/boilerplate
  cd boilerplate
  ```
  </td><td valign="top">

  > *Align* to specified `node` version.

  ```sh
  # using nvm
  nvm install v18.15.0
  nvm use

  # using npm
  npm install -g n
  sudo n stable # or 18.15.0
  ```
  </td><td valign="top">

  > *Install* package dependencies.

  ```sh
  # install deps
  npm i

  # update deps
  npm update --latest
  ```
  </td></tr>
</table>

---

### Commands

**run to bundle app source into the `/dist` folder**

```
npm build

# RUNS
#   tsc --project tsconfig.build.json
```

**use to execute codebase in higher environments over pipeline**

```
npm start

# RUNS
#   node dist/src/main.js
```

**run to spin up a localize instance of the app at `localhost:8080`**

```
npm run dev

# RUNS
#   nodemon --ext '*' --exec
#   node --experimental-specifier-resolution=node --loader ts-node/esm
#   src/main.ts
```

Here you should say what actually happens when you execute the code above.

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Developing

### Built With

List main libraries, frameworks used including versions (React, Angular etc...)

---

### Prerequisites

What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.

---

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

---

### Building

If your project needs some additional steps for the developer to build the project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets executed.

---

### Deploying / Publishing

give instructions on how to build and release a new version In case there's some step you have to take that publishes this project to a server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Versioning

Will likely implement something to automate this process away, added a few options below, but haven't settled on the approach yet.

- [SemVer](http://semver.org/)

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
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

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Tests

Describe and show how to run the tests with code examples. Explain what these tests test and why.

```shell
Give an example
```

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Style guide

**trigger this command to align the codebase format to our standardizations (code changes may occur)**

```shell
npm run format

# RUNS
#   prettier --write --ignore-unknown
```

---

**runs a linter over entire codebase (code changes may occur)**

```shell
npm run lint

# RUNS
#   eslint **/*.{ts,tsx} --fix
```

**when problems arise in the package dependencies removing the following and doing a clean install # will resolve a plethora of time consuming tasks**

```shell
npm run clean

# RUNS
#   rm -rf node_modules &&
#   rm -rf dist &&
#   rm -rf coverage &&
#   rm -rf package-lock.json
```

<br />

**executes the entire playwright E2E and Jest Unit Testing suite these tasks generate a wealth of information # stored in the `/coverage` directory**

```shell
npm run test

# RUNS
#   jest **/*.{ts,tsx} --colors --coverage
```

<br />

**this isn't technically logs; however, it is a safe-guard to ensure git commit messages adhere to high-quality standards (subject to change, does make assumptions)**

```shell
npm run logs

# RUNS
#   npx
#     --no-install commitlint
#     --config commitlint.config.cjs
#     --edit

```

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## API Reference

> Will update with details on where fixtures & mocked data resides in project when I get that work implemented.

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Database

Linking up to a DB for this effort is probably not necessary, I will be building out fixtures/mocks to display real data...

Due to how small this project is, avoiding all the configurations and complexities that come along with integrating a full ecosystem.

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
</tr>
<tr>
  <td colspan="5" align="left" valign="top">

## Licensing

Licensing is likely unnecessary for this initiative but may get something included here.

  </td>
</tr>
<tr>
  <td colspan="5" align="right" valign="top"><br />
    <a align="right" title="Go to top of page" href="#vanilla-typescript-">
      <img alt="return to page top" src="./img/to-top.svg" width="92.5" valign="bottom" />
    </a> &nbsp; &nbsp;
  <br /><br /></td>
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
  </tr>
</table>