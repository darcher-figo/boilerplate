# <hr /> <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">][ipg-url]

<a name="top"></a>

> :label: &nbsp; Vanilla Typescript starter kit as a github template

This vanilla boilerplate is a <u>Proof of Concept</u> to showcase an implementation of [Web Components][web-components-url]&mdash;*natively* avaliable in the [JavaScript API][js-api-url].

## <sup>Table of Contents</sup>

<table align="right">
<tr><th scope="col"><sub><sup>DOCUMENTATION</sup></sub></td></tr><tr><td><br />

<sup>:scroll: &nbsp; [<b>Code of Conduct</b>](./docs/CODE_OF_CONDUCT.md) &nbsp; &nbsp;</sup><br />
<sup>:closed_lock_with_key: &nbsp; [<b>Code Owners</b>](./docs/CODEOWNER.md)</sup><br />
<sup>:pencil2: &nbsp; [<b>Contributing</b>](./docs/CONTRIBUTING.md)</sup><br />
<sup>:children_crossing: &nbsp; [<b>Guidelines</b>](./docs/README.md)</sup><br />
<sup>:ticket: &nbsp; [<b>Licensing</b>](./LICENSE.md)</sup><br />
<sup>:triangular_ruler: &nbsp; [<b>README</b>](./docs/README.sample.md) <sup><b>`TEMPLATE`</b></sup></sup>
<br /><br /></td></tr>
<tr><th scope="col"><sup><sub>TECHNOLOGY</sub></sup></th></tr><tr><td align="center"><br />

<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="23"/><!--
--> <img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="21.5" /><!--
--> <img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="22" /><!--
--> <img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="27" /><br /><!--
--> <img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="23" /><!--
--> <img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="29" /><!--
--> <img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="40" >
<br /><br /></td></tr>
<tr><th scope="col"><sup><sub>BADGES</sub></sup></td></tr>

<tr><td align="center"><br />

[![Issues][issues-shield]][issues-url]<br />
[![MIT License][license-shield]][license-url]<br />
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]<br />
[![Contributors][contributors-shield]][contributors-url]
<br /><br /></th></tr></table>

- [ vIPG Boilerplate ](#-vipg-boilerplate-)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [ :scissors:   Clone project and go to directory](#-scissors--clone-project-and-go-to-directory)
    - [ :pushpin:   Alignment to specified `node` version](#-pushpin--alignment-to-specified-node-version)
    - [ :recycle:   Removes dynamicly generated directories](#-recycle--removes-dynamicly-generated-directories)
    - [ :package:   Install package dependencies](#-package--install-package-dependencies)
    - [ :bell:   Launch `dev` instance to browser](#-bell--launch-dev-instance-to-browser)
  - [Configuration](#configuration)
    - [ :flashlight:   Artifactory](#-flashlight--artifactory)
    - [ :nut\_and\_bolt:   Environment variables `.env`](#-nut_and_bolt--environment-variables-env)
  - [Formatting](#formatting)
    - [ :black\_nib:   Formats project code for readability and familiarity](#-black_nib--formats-project-code-for-readability-and-familiarity)
  - [Linting](#linting)
    - [ :barber:   Lints project code to reduce syntax errors](#-barber--lints-project-code-to-reduce-syntax-errors)
  - [Testing](#testing)
    - [ :construction:   Executes unit and e2e test suites to ensure quality](#-construction--executes-unit-and-e2e-test-suites-to-ensure-quality)
    - [ :vertical\_traffic\_light:   Lints commit messages for a readable `git` history](#-vertical_traffic_light--lints-commit-messages-for-a-readable-git-history)
  - [Building](#building)
    - [ :rocket:   Bundle to `dist` folder](#-rocket--bundle-to-dist-folder)
    - [ :checkered\_flag:   Start production instance](#-checkered_flag--start-production-instance)
  - [Versioning](#versioning)
  - [Considerations](#considerations)

---

## <sub>Installation</sub>

### <sup> :scissors: &nbsp; Clone project and go to directory</sup>

> ```sh
> gh repo clone darcher-figo/boilerplate
> cd boilerplate
> ```

### <sup> :pushpin: &nbsp; Alignment to specified `node` version</sup>

> ```sh
> # using nvm
> nvm install v18.15.0
> nvm use
>
> # using npm
> npm install -g n
> sudo n stable # or 18.15.0
> ```

### <sup> :recycle: &nbsp; Removes dynamicly generated directories</sup>

> ```sh
> npm run clean
>
> # rm -rf node_modules &&
> # rm -rf dist &&
> # rm -rf coverage &&
> # rm -rf package-lock.json
> ```

### <sup> :package: &nbsp; Install package dependencies</sup>

> ```sh
> # install deps
> npm i
>
> # update deps
> npm update --latest
> ```

### <sup> :bell: &nbsp; Launch `dev` instance to browser</sup>

> ```sh
> # run dev on localhost:3000
> npm run dev
> ```

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Configuration</sub>

Below is a configuration check to ensure each expected variable is defined and passed as a configuration export.

### <sup> :flashlight: &nbsp; Artifactory

> :soon: &nbsp; Include configurations to pull from *Artifactory*

### <sup> :nut_and_bolt: &nbsp; Environment variables `.env`</sup>

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

### <sup> :black_nib: &nbsp; Formats project code for readability and familiarity</sup>

> ```sh
> npm run format
>
> # prettier --write --ignore-unknown
> ```

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Linting</sub>

### <sup> :barber: &nbsp; Lints project code to reduce syntax errors</sup>

> ```sh
> npm run lint
>
> # eslint **/*.{ts,tsx} --fix
> ```

## <sub>Testing</sub>

### <sup> :construction: &nbsp; Executes unit and e2e test suites to ensure quality</sup>

> ```sh
> # executes Jest & Playwright
> npm run test
>
> # jest **/*.{ts,tsx} --colors --coverage
> ```

### <sup> :vertical_traffic_light: &nbsp; Lints commit messages for a readable `git` history</sup>

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

## <sub>Building</sub>

### <sup> :rocket: &nbsp; Bundle to `dist` folder</sup>

> ```sh
> npm build
>
> # tsc --project tsconfig.build.json
> ```

### <sup> :checkered_flag: &nbsp; Start production instance</sup>

> ```sh
> npm start
>
> # node dist/src/main.js
> ```

## <sub>Versioning</sub>

> :soon: &nbsp; Implement [SemVer][sem-ver-url] for version automation.

<table align="right"><tr><td>

<a href="#top" title="Return to top">:top:</a></td></tr></table>

## <sub>Considerations</sub>
:pushpin: &nbsp; Future prospects and implementation ideas.
- [ ] Outline versioning approach
- [ ] Setup Artifactory
- [ ] Artifactory configurations
- [ ] Create mocked data
- [ ] Create fixtures

---

<br />
<table align="center"><tr><td valign="middle">

&copy; ммххɪɪɪ <img alt="IPG" src="./img/logo.svg" width="24" valign="text-bottom" /></td><td>
<a href="#top" title="Return to top">:top:</a></td></tr></table>

[js-api-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[web-components-url]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
[ipg-url]: https://www.independencepetgroup.com/
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