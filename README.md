# <hr /> <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">][ipg-url]

> :heavy_exclamation_mark: **Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!

This vanilla boilerplate is a <i>Proof of Concept</i> to showcase an implementation of [Web Components][web-components-url]&mdash;natively avaliable in the [JavaScript API][js-api-url].

## <sup>Table of Contents</sup>

<table align="right"><tr><th align="left"><sup><sub>INFO</sub></sup>

[![Issues][issues-shield]][issues-url]<br />
[![MIT License][license-shield]][license-url]<br />
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]<br />
[![Contributors][contributors-shield]][contributors-url]</th></tr>
<tr><td><sup><sub><b>DOCS</b></sub></sup>

<sup>:scroll: &nbsp; [<b>Code of Conduct</b>](./docs/CODE_OF_CONDUCT.md) &nbsp; &nbsp;</sup><br />
<sup>:closed_lock_with_key: &nbsp; [<b>Code Owners</b>](./docs/CODEOWNER.md)</sup><br />
<sup>:pencil2: &nbsp; [<b>Contributing</b>](./docs/CONTRIBUTING.md)</sup><br />
<sup>:children_crossing: &nbsp; [<b>Guidelines</b>](./docs/README.md)</sup><br />
<sup>:triangular_ruler: &nbsp; [<b>README</b>](./docs/README.sample.md) <sup><b>`TEMPLATE`</b></sup></sup></td></tr>
</table>

- [ vIPG Boilerplate ](#-vipg-boilerplate-)
  - [Table of Contents](#table-of-contents)
  - [1. Setup](#1-setup)
    - [1.1 Installation](#11-installation)
    - [2. Developing](#2-developing)
      - [2.1 Technology](#21-technology)
      - [2.2 Configuration](#22-configuration)
      - [2.3 Formatting and Linting](#23-formatting-and-linting)
    - [3. Testing](#3-testing)
    - [4. Building](#4-building)
  - [5. Library](#5-library)
    - [5.1 Versioning](#51-versioning)
  - [6. API Reference](#6-api-reference)
  - [7. Licensing](#7-licensing)

---

## <sup>1. Setup</sup>

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

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

### <sup>2. Developing</sup>

#### <sub>2.1 Technology</sub>

<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="23"/><!--
--> <img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="21.5" /><!--
--> <img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="22" /><!--
--> <img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="29" /><!--
--> <img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="27" /><!--
--> <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="23" /><!--
--> <img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="40" >

#### <sub>2.2 Configuration</sub>

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
> PUBLIC_URL=localhost:3000
> ```

#### <sub>2.3 Formatting and Linting</sub>

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

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

### <sup>3. Testing</sup>

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

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

### <sup>4. Building</sup>

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

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

## <sup>5. Library</sup>

> :question: &nbsp; This project **requires** versioned updates to Artifactory; *list details when available*

### <sub>5.1 Versioning</sub>

<sup>:pushpin: &nbsp;  :soon: Implement [SemVer][sem-ver-url] for version automation.</sup>

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

## <sup>6. API Reference</sup>

> :question: This project **requires** mocks and/or fixtures for sample content; *list details when avaliable*

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

## <sup>7. Licensing</sup>

 Licensing information is located in the  file.

<br />
<table align="right"><tr><td>
<a href="#vipg-boilerplate" title="Return to top">

:top:</a></td></tr></table>

---

<table align="center"><tr><td>

<sub><sup>:beers: &nbsp;[<b>UNLICENSED</b>][unlicense-url]</sup></sub></td>
<!-- <td><i><u>υι</u>∫</i><b>κɪτ</b></td> -->
<!--td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td-->
</tr></table>

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