# <hr /> <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">][ipg-url]

> :heavy_exclamation_mark: **Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!

This vanilla boilerplate is a <i>Proof of Concept</i> to showcase a stable, simplistic, adaptable implementation of [Web Components][web-components-url], natively avaliable in the [JavaScript API][js-api-url].

<sup>:information_source: &nbsp; **Like this `README` layout**? The template is located [here][readme-sample-url].</sup>

## <sup>Table of Contents</sup>

<table align="right">
<tr><th align="left" valign="bottom">
  <sup><sub>INFO</sub></sup>

[![Forks][forks-shield]][forks-url]<br>
[![Stargazers][stars-shield]][stars-url]<br>
[![Issues][issues-shield]][issues-url]<br>
[![MIT License][license-shield]][license-url]<br>
[![Contributors][contributors-shield]][contributors-url]</th></tr>
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
    - [5.1 Versioning](#51-versioning)
  - [6. API Reference](#6-api-reference)
  - [7. Licensing](#7-licensing)

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

Below is a configuration check to ensure each expected variable is defined and passed as a configuration export.

:one: &nbsp; **Environment Variables** `.env`

> ```txt
> PORT=3000
> HTTP=http
> HOST=localhost
>
> LOG_LVL=verbose
> ENABLE_LOGS=true
> NODE_ENV=development
> PUBLIC_URL=$HTTP://$HOST:$PORT
> ```

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

## <sup>3. Testing</sup>

:one: &nbsp; **Tests** with [Jest][jest-unit-test-url] unit testing library and [Playwright][playwright-e2e-url] e2e framework to ensure quality.

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

## <sup>4. Building</sup>

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

## <sup>5. Releasing</sup>

> :question: &nbsp; This project does not need a release strategy, it is a template.

### <sub>5.1 Versioning</sub>

<sup>:information_source: &nbsp;  Will implement [SemVer][sem-ver-url] to *semi-*automate the versioning process.</sup>

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## <sup>6. API Reference</sup>

> :question: This project will likely only utilize mocks or fixtures to visualize content.

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

## <sup>7. Licensing</sup>

This project is free to use, additional Licensing information is located in the [LICENSE.md][unlicense-url] file.


<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" alt="Return to top" src="./img/to-top.svg" width="32" />
</a><br />

---

<table align="center"><tr>
<td><i><u>υι</u>∫</i><b>κɪτ</b></td>
<!--td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td-->
</tr></table>

[readme-sample-url]: ./docs/README.sample.md
[js-api-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[web-components-url]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
[ipg-url]: https://www.independencepetgroup.com/
[playwright-e2e-url]: https://playwright.dev/
[jest-unit-test-url]: https://jestjs.io/
[unlicense-url]: ./LICENSE.md
[sem-ver-url]: http://semver.org/
[contributors-shield]: https://img.shields.io/github/contributors/darcher-figo/boilerplate.svg
[contributors-url]: https://github.com/darcher-figo/boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/darcher-figo/boilerplate.svg
[forks-url]: https://github.com/darcher-figo/boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/darcher-figo/boilerplate.svg
[stars-url]: https://github.com/darcher-figo/boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/darcher-figo/boilerplate.svg
[issues-url]: https://github.com/darcher-figo/boilerplate/issues
[license-shield]: https://img.shields.io/github/license/darcher-figo/boilerplate.svg
[license-url]: https://github.com/darcher-figo/boilerplate/blob/master/LICENSE.txt