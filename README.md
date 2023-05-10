# <sup>vIPG Boilerplate</sup> [<img align="right" alt="company brand" src="./img/logo.lg.svg" width="128">](https://www.independencepetgroup.com/)

> **Vanilla** is not solely used to *flavor* baked goods or *mask* the bitterness of your coffee, it *excels* in flexible cross-framework frontend projects, also!



This vanilla boilerplate is a <u>Proof of Concept</u> to showcase a stable, simplistic, adaptable implementation of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), natively avaliable in the javascript API.




## <sup>Outline</sup>

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
    - [Technology](#technology)
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

---

## <sup>Get Started</sup>

A step-by-step walk through to get an up-to-date local instance installed.

### <sub>Installation</sub>

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

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## <sup>Developing</sup>

### <sub>Technology</sub>

<img alt="HTML5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" width="23" />
<img alt="Jest" src="https://cdn.auth0.com/blog/testing-react-with-jest/logo.png" width="21.5" />
<img alt="Github" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/640px-Git_icon.svg.png" width="22" />
<img alt="SASS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/640px-Sass_Logo_Color.svg.png" width="29" />
<img alt="ESLint" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/640px-ESLint_logo.svg.png" width="27" />
<img alt="Typescript" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" width="23" />
<img alt="NodeJS" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png" width="40" >

### <sub>Configuration</sub>

> *More to come for this area*, I intend to incorperate the `dotenv` library for dynamic, globally accessible data points.

#### <sub>Environment Variables</sub>

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

### <sub>Formatting and Linting</sub>

1️⃣ &nbsp; **Formats** project code for readability and familiarity.

> ```shell
> npm run format
>
> # RUNS
> #   prettier --write --ignore-unknown
> ```

1️⃣ &nbsp; **Lints** project code to reduce syntax errors.

> ```shell
> npm run lint
>
> # RUNS
> #   eslint **/*.{ts,tsx} --fix
> ```

1️⃣ &nbsp; **Removes** dynamicly generated directories (_for a clean install_).

> ```shell
> npm run clean
>
> # RUNS
> #   rm -rf node_modules &&
> #   rm -rf dist &&
> #   rm -rf coverage &&
> #   rm -rf package-lock.json
> ```

<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## Testing

**executes the entire playwright E2E and Jest Unit Testing suite these tasks generate a wealth of information # stored in the `/coverage` directory**

```shell
npm run test

# RUNS
#   jest **/*.{ts,tsx} --colors --coverage
```



**this isn't technically logs; however, it is a safe-guard to ensure git commit messages adhere to high-quality standards (subject to change, does make assumptions)**

```shell
npm run logs

# RUNS
#   npx
#     --no-install commitlint
#     --config commitlint.config.cjs
#     --edit

```



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

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



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## Releasing

give instructions on how to build and release a new version In case there's some step you have to take that publishes this project to a server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

### Versioning

Will likely implement something to automate this process away, added a few options below, but haven't settled on the approach yet.

- [SemVer](http://semver.org/)



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## API Reference

> Will update with details on where fixtures & mocked data resides in project when I get that work implemented.



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## Database

Linking up to a DB for this effort is probably not necessary, I will be building out fixtures/mocks to display real data...

Due to how small this project is, avoiding all the configurations and complexities that come along with integrating a full ecosystem.



<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

## Licensing

Licensing is likely unnecessary for this initiative but may get something included here.


<a title="Go to top of page" href="#vanilla-typescript-">
  <img align="right" src="./img/to-top.svg" width="96" />
</a>

---

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