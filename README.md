# <hr /> <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">][ipg-url]

<a name="top"></a>

> :label: &nbsp; Vanilla Typescript starter kit as a github template

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
<sup>:ticket: &nbsp; [<b>Licensing</b>](./LICENSE.md)</sup><br />
<sup>:triangular_ruler: &nbsp; [<b>README</b>](./docs/README.sample.md) <sup><b>`TEMPLATE`</b></sup></sup></td></tr>
</table>

- [ vIPG Boilerplate ](#-vipg-boilerplate-)
  - [Table of Contents](#table-of-contents)
  - [Technology](#technology)
  - [Installation](#installation)
    - [Clone project and go to directory](#clone-project-and-go-to-directory)
    - [Alignment to specified `node` version](#alignment-to-specified-node-version)
    - [Removes dynamicly generated directories](#removes-dynamicly-generated-directories)
    - [Install package dependencies](#install-package-dependencies)
    - [Launch `dev` instance to browser](#launch-dev-instance-to-browser)
  - [Configuration](#configuration)
    - [Environment variables `.env`](#environment-variables-env)
  - [Formatting](#formatting)
    - [Formats project code for readability and familiarity](#formats-project-code-for-readability-and-familiarity)
  - [Linting](#linting)
    - [Lints project code to reduce syntax errors](#lints-project-code-to-reduce-syntax-errors)
  - [Testing](#testing)
    - [Executes unit and e2e test suites to ensure quality](#executes-unit-and-e2e-test-suites-to-ensure-quality)
    - [Lints commit messages for a readable `git` history](#lints-commit-messages-for-a-readable-git-history)
  - [Building](#building)
    - [Bundle to `dist` folder](#bundle-to-dist-folder)
    - [Start production instance](#start-production-instance)
  - [Versioning](#versioning)
  - [Considerations](#considerations)

---

## <sub>Technology</sub>

<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="23"/><!--
--> <img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="21.5" /><!--
--> <img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="22" /><!--
--> <img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="29" /><!--
--> <img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="27" /><!--
--> <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="23" /><!--
--> <img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="40" >

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Installation</sub>

### Clone project and go to directory

> ```sh
> gh repo clone darcher-figo/boilerplate
> cd boilerplate
> ```

### Alignment to specified `node` version

> ```sh
> # using nvm
> nvm install v18.15.0
> nvm use
>
> # using npm
> npm install -g n
> sudo n stable # or 18.15.0
> ```

### Removes dynamicly generated directories

> ```sh
> npm run clean
>
> # rm -rf node_modules &&
> # rm -rf dist &&
> # rm -rf coverage &&
> # rm -rf package-lock.json
> ```

### Install package dependencies

> ```sh
> # install deps
> npm i
>
> # update deps
> npm update --latest
> ```

### Launch `dev` instance to browser

> ```sh
> # run dev on localhost:3000
> npm run dev
> ```

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Configuration</sub>

Below is a configuration check to ensure each expected variable is defined and passed as a configuration export.

### Environment variables `.env`

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

## <sub>Formatting</sub>

### Formats project code for readability and familiarity

> ```sh
> npm run format
>
> # prettier --write --ignore-unknown
> ```

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Linting</sub>

### Lints project code to reduce syntax errors

> ```sh
> npm run lint
>
> # eslint **/*.{ts,tsx} --fix
> ```

## <sup>Testing</sup>

### Executes unit and e2e test suites to ensure quality

> ```sh
> # executes Jest & Playwright
> npm run test
>
> # jest **/*.{ts,tsx} --colors --coverage
> ```

### Lints commit messages for a readable `git` history

> ```sh
> npm run clint
>
> # npx
> #   --no-install commitlint
> #   --config commitlint.config.cjs
> #   --edit
> ```

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sup>Building</sup>

### Bundle to `dist` folder

> ```sh
> npm build
>
> # tsc --project tsconfig.build.json
> ```

### Start production instance

> ```sh
> npm start
>
> # node dist/src/main.js
> ```

## <sup>Versioning</sup>

:soon: &nbsp; Implement [SemVer][sem-ver-url] for version automation.

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sup>Considerations</sup>
:pushpin: &nbsp; Future prospects and implementation ideas.
- [ ] Outline versioning approach
- [ ] Setup Artifactory
- [ ] Artifactory configurations
- [ ] Create mocked data
- [ ] Create fixtures

---

<br />
<table align="center"><tr><td>

<img alt="IPG" src="./img/logo.svg" width="24" valign="text-top" /></td><td>
<i><u>υι</u>∫</i><b>κɪτ</b></td><td>
<a href="#top" title="Return to top">:top:</a></td></tr></table>

<!-- <td><i><u>υι</u>∫</i><b>κɪτ</b></td> -->
<!--td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td-->

[js-api-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[web-components-url]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
[ipg-url]: https://www.independencepetgroup.com/
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