# <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">](https://www.independencepetgroup.com/)

> **Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!

<br />

This vanilla boilerplate is a <u>Proof of Concept</u> to showcase a stable, simplistic, adaptable implementation of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), natively avaliable in the javascript API.

<br />


## Outline

<table align="right">
<tr><th>
  <sup><sub>INFO</sub></sup>

[![Contributors][contributors-shield]][contributors-url]<br>
[![Forks][forks-shield]][forks-url]<br>
[![Issues][issues-shield]][issues-url]<br>
[![Stargazers][stars-shield]][stars-url]<br>
[![MIT License][license-shield]][license-url]<br>

</th></tr>
<tr><td><a href="./docs/CODEOWNER.md"><img src="./img/safe.svg" width="16" valign="text-top"> <sup><sub><b>OWNERS</b></sub></sup></a></td></tr>
<tr><td><a href="./README.md"><img src="./img/note.svg" width="16" valign="text-top"> <sup><sub><b>README</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/README.md"><img src="./img/star.svg" width="16" valign="text-top"> <sup><sub><b>GUIDES</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CODE_OF_CONDUCT.md"><img src="./img/sign.svg" width="16" valign="text-top"> <sup><sub><b>ETHOS</b></sub></sup></a></td></tr>
<tr><td><a href="./docs/CONTRIBUTING.md"><img src="./img/gift.svg" width="16" valign="text-top"> <sup><sub><b>RULES</b></sub></sup></a></td></tr>
</td></tr></table>

- [vIPG Boilerplate ](#vipg-boilerplate-)
  - [Outline](#outline)
  - [Get Started](#get-started)
    - [Installation](#installation)
  - [Developing](#developing)
    - [Configuration](#configuration)
      - [Environment Variables](#environment-variables)
    - [Formatting and Linting](#formatting-and-linting)
  - [Testing](#testing)
  - [Building](#building)
  - [Releasing](#releasing)
    - [Versioning](#versioning)
  - [API Reference](#api-reference)
  - [Database](#database)
  - [Licensing](#licensing)

<br /><br />

## Get Started

A step-by-step walk through to get an up-to-date local instance installed.

<br />

### Installation

1️⃣ &nbsp; **Clone project** and go to directory.

> ```sh
> gh repo clone darcher-figo/boilerplate
> cd boilerplate
> ```

2️⃣ &nbsp; ***Alignment*** to specified `node` version.

> ```sh
> # using nvm
> nvm install v18.15.0
> nvm use
>
> # using npm
> npm install -g n
> sudo n stable # or 18.15.0
> ```

3️⃣ &nbsp; ***Install*** package dependencies.

> ```sh
> # install deps
> npm i
>
> # update deps
> npm update --latest
> ```

4️⃣ &nbsp; Launch ***Dev*** instance to browser.

> ```sh
> # run dev on localhost:3000
> npm run dev
> ```

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Developing

<table align="right"><tr><td align="center" valign="bottom">
<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="40" />
<img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="42" />
<img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="42" />
<img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="40" /><br />
<img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="50" />
<img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="74" >
<img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="58" />
</td></tr></table>

### Configuration

> *More to come for this area*, I intend to incorperate the `dotenv` library for dynamic, globally accessible data points.

#### Environment Variables

Below is a configuration check to ensure each expected variable is defined and passed as a configuration export.

```javascript
const _env = process.env;

const _vars = [
  "HOST",
  "HREF",
  "LOGS_ON",
  "LOG_LVL",
  "NODE_ENV",
  "PORT",
  "PROTOCOL",
  "PUBLIC_URL"
];
for (const name of _vars) {
  if (Boolean(_env[name])) {
    throw new Error(name + ' missing');
  }
};

const _enableLogs = _env.LOGS_ON?.toLowerCase();
const _isLogging = _enableLogs?.localeCompare("true");
module.exports = {
  env: _env.NODE_ENV,
  logger: {
    enabled: Boolean(_isLogging),
    level: _env.LOG_LVL || "verbose"
  },
  server: {
    port: Number(_env.PORT)
  },
};
```

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

### Formatting and Linting

**trigger this command to align the codebase format to our standardizations (code changes may occur)**

```shell
npm run format

# RUNS
#   prettier --write --ignore-unknown
```

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

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Testing

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

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Building

4️⃣ &nbsp; **Bundle** to `dist` folder.

> ```sh
> npm build
>
> # RUNS
> #     tsc --project tsconfig.build.json
> ```

5️⃣ &nbsp; ***Start*** production instance.

> ```sh
> npm start
>
> # RUNS
> #     node dist/src/main.js
> ```

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Releasing

give instructions on how to build and release a new version In case there's some step you have to take that publishes this project to a server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

### Versioning

Will likely implement something to automate this process away, added a few options below, but haven't settled on the approach yet.

- [SemVer](http://semver.org/)

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## API Reference

> Will update with details on where fixtures & mocked data resides in project when I get that work implemented.

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Database

Linking up to a DB for this effort is probably not necessary, I will be building out fixtures/mocks to display real data...

Due to how small this project is, avoiding all the configurations and complexities that come along with integrating a full ecosystem.

<br />

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

<br />

## Licensing

Licensing is likely unnecessary for this initiative but may get something included here.

<table align="center"><tr>
<td><i><u>υι</u>∫</i><b>κɪτ</b></td>
<!--td><b>ʷʬ</b>⥂·★.⥄<b>τ&#866;s⨯</b></td-->
</tr></table>

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com