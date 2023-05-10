# <hr /> <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">](https://www.independencepetgroup.com/)

> **Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!

This vanilla boilerplate is a <i>Proof of Concept</i> to showcase a stable, simplistic, adaptable implementation of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), natively avaliable in the [JavaScript API](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

## <sup>Table of Contents</sup>

<table align="right">
<tr><th align="left" valign="bottom">
  <sup><sub>INFO</sub></sup>

[![Contributors][contributors-shield]][contributors-url]<br>
[![Forks][forks-shield]][forks-url]<br>
[![Issues][issues-shield]][issues-url]<br>
[![Stargazers][stars-shield]][stars-url]<br>
[![MIT License][license-shield]][license-url]</th></tr>
<tr><td><a href="./docs/CODEOWNER.md"><img src="./img/safe.svg" width="16" valign="text-top"> <sup><sub><b>OWNERS</b></sub></sup></a></td></tr>
<tr><td><a href="./README.md"><img src="./img/note.svg" width="16" valign="text-top"> <sup><sub><b>README</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/README.md"><img src="./img/star.svg" width="16" valign="text-top"> <sup><sub><b>GUIDES</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CODE_OF_CONDUCT.md"><img src="./img/sign.svg" width="16" valign="text-top"> <sup><sub><b>ETHOS</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CONTRIBUTING.md"><img src="./img/gift.svg" width="16" valign="text-top"> <sup><sub><b>RULES</b></sub></sup></a></td></tr></td></tr></table>

- [ vIPG Boilerplate ](#-vipg-boilerplate-)
  - [Table of Contents](#table-of-contents)
  - [1. Get Started](#1-get-started)
    - [1.1 Installation](#11-installation)
  - [2. Developing](#2-developing)
    - [2.1 Technology](#21-technology)
    - [2.2 Configuration](#22-configuration)
    - [2.3 Formatting and Linting](#23-formatting-and-linting)
  - [3. Testing](#3-testing)
  - [4. Building](#4-building)
  - [5. Releasing](#5-releasing)
    - [6. Versioning](#6-versioning)
  - [7. API Reference](#7-api-reference)
  - [8. Licensing](#8-licensing)

---

## <sup>1. Get Started</sup>

A step-by-step walk through to get an up-to-date local instance installed.

### <sub>1.1 Installation</sub>

:one: &nbsp; **Clone project** and go to directory.

> ```sh
> gh repo clone darcher-figo/boilerplate
> cd boilerplate
> ```

:two: &nbsp; ***Alignment*** to specified `node` version.

> ```sh
> # using nvm
> nvm install v18.15.0
> nvm use
>
> # using npm
> npm install -g n
> sudo n stable # or 18.15.0
> ```

:three: &nbsp; ***Install*** package dependencies.

> ```sh
> # install deps
> npm i
>
> # update deps
> npm update --latest
> ```

:four: &nbsp; Launch ***Dev*** instance to browser.

> ```sh
> # run dev on localhost:3000
> npm run dev
> ```

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## <sup>2. Developing</sup>

### <sub>2.1 Technology</sub>

<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="23"/><!--
--> <img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="21.5" /><!--
--> <img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="22" /><!--
--> <img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="29" /><!--
--> <img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="27" /><!--
--> <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="23" /><!--
--> <img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="40" >
<br />

### <sub>2.2 Configuration</sub>

> *More to come for this area*, I intend to incorperate the `dotenv` library for dynamic, globally accessible data points.

Below is a configuration check to ensure each expected variable is defined and passed as a configuration export.

:one: &nbsp; **Environment Variables**

> ```javascript
> const _env = process.env;
>
> const _vars = [
>   "HOST",
>   "HREF",
>   "LOGS_ON",
>   "LOG_LVL",
>   "NODE_ENV",
>   "PORT",
>   "PROTOCOL",
>   "PUBLIC_URL"
> ];
> for (const name of _vars) {
>   if (Boolean(_env[name])) {
>     throw new Error(name + ' missing');
>   }
> };
>
> const _enableLogs = _env.LOGS_ON?.toLowerCase();
> const _isLogging = _enableLogs?.localeCompare("true");
> module.exports = {
>   env: _env.NODE_ENV,
>   logger: {
>     enabled: Boolean(_isLogging),
>     level: _env.LOG_LVL || "verbose"
>   },
>   server: {
>     port: Number(_env.PORT)
>   },
> };
> ```

<br />

### <sub>2.3 Formatting and Linting</sub>

:one: &nbsp; **Formats** project code for readability and familiarity.

> ```sh
> npm run format
>
> # prettier --write --ignore-unknown
> ```

:two: &nbsp; **Lints** project code to reduce syntax errors.

> ```sh
> npm run lint
>
> # eslint **/*.{ts,tsx} --fix
> ```

:three: &nbsp; **Removes** dynamicly generated directories.

> ```sh
> npm run clean
>
> # rm -rf node_modules &&
> # rm -rf dist &&
> # rm -rf coverage &&
> # rm -rf package-lock.json
> ```

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## 3. Testing

:one: &nbsp; **Tests** with [Jest](https://jestjs.io/) unit testing library and [Playwright](https://playwright.dev/) e2e framework to ensure quality.

> ```sh
> npm run test
>
> # jest **/*.{ts,tsx} --colors --coverage
> ```

:two: &nbsp; **Lints** commit messages to promote a readable `git` history.

> ```sh
> npm run clint
>
> # npx
> #   --no-install commitlint
> #   --config commitlint.config.cjs
> #   --edit
> ```

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## 4. Building

:one: &nbsp; **Bundle** to `dist` folder.

> ```sh
> npm build
>
> # tsc --project tsconfig.build.json
> ```

:two: &nbsp; ***Start*** production instance.

> ```sh
> npm start
>
> # node dist/src/main.js
> ```

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## 5. Releasing

> 🔜  This project will not follow a release strategy as it is or will become a repository template; it is or will be accessible from an Artifactory.

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

### 6. Versioning

> 🔜  I intend to implement [SemVer](http://semver.org/) and semi-automate the versioning process.

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## 7. API Reference

> 🔜 This project will likely only utilize mocks or fixtures to visualize content.

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## 8. Licensing

This project is free to use, additional Licensing information is located in the [LICENSE.md](./LICENSE.md) file.


<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

<table align="center"><tr>
<td><i><u>υι</u>∫</i><b>κɪτ</b></td>
<!--td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td-->
</tr></table>

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt