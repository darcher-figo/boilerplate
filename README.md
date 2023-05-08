<img align="right" src="./img/logo.lg.svg" alt="Logo of the project" width="225">

# Vanilla Typescript | <sub><sup> KIT</sup></sub>

This project is a Proof of Concept (POC) to showcase a stable vanilla typescript frontend implementation approach with [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Our goals is the trial and thorough documentation of risk-reward benefit analysis over the course of this projects lifespan.

> Vanilla isn't just for a flavor burst in your sugarlicious coffee addiction, it excels in simiplifying cross platform projects, too!

<br /><table><tr align="center" valign="middle">
<td><img src="./img/safety.svg" width="16" /> <a href="./CODEOWNERS.md"><sup><sub><b>CODE OWNERS
<td><img src="./img/symbols.svg" width="16" /> <a href="./CODE_OF_CONDUCT.md"><sup><sub><b>CODE OF CONDUCT
<td><img src="./img/branch.svg" width="16" /> <a href="./CONTRIBUTING.md"><sup><sub><b>CONTRIBUTION RULES
<td><img src="./img/suitcase.svg" width="16" /> <a href="./README.md"><sup><sub><b>BEST PRACTICES
<td><img src="./img/note.svg" width="16" /> <a href="../README.md"><sup><sub><b>DOCUMENTATION
<tr><td colspan="6">

## Installing / Getting started

Here is a quick introduction of the *minimal* setup you need to get a `hello world` up & running locally.

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

<br /><tr><td colspan="6">

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

<br /><tr><td colspan="6">

## Developing

### Built With
List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/your-project.git
cd your-project/
packagemanager install
```

And state what happens step-by-step. If there is any virtual environment, local server or database feeder needed, explain here.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here. for example:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing
give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

<br /><tr><td colspan="6">

## Versioning

Will likely implement something to automate this process away, added a few options below, but haven't settled on the approach yet.

**Resources**

- [SemVer](http://semver.org/)
- [link to tags on this repository](/tags).

<br /><tr><td colspan="6">

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

<br /><tr><td colspan="6">

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

<br /><tr><td colspan="6">

## Style guide

### trigger this command to align the codebase format to our standardizations (code changes may occur)

```shell
npm run format

# RUNS
#   prettier --write --ignore-unknown
```

### runs a linter over entire codebase (code changes may occur)

```shell
npm run lint

# RUNS
#   eslint **/*.{ts,tsx} --fix
```

#### when problems arise in the package dependencies removing the following and doing a clean install # will resolve a plethora of time consuming tasks

```shell
npm run clean

# RUNS
#   rm -rf node_modules &&
#   rm -rf dist &&
#   rm -rf coverage &&
#   rm -rf package-lock.json
```

#### executes the entire playwright E2E and Jest Unit Testing suite these tasks generate a wealth of information # stored in the `/coverage` directory

```shell
npm run test

# RUNS
#   jest **/*.{ts,tsx} --colors --coverage
```
#### this isn't technically logs; however, it is a safe-guard to ensure git commit messages adhere to high-quality standards (subject to change, does make assumptions)

```shell
npm run logs

# RUNS
#   npx
#     --no-install commitlint
#     --config commitlint.config.cjs
#     --edit

```

<br /><tr><td colspan="6">

## Api Reference

> Will update with details on where fixtures & mocked data resides in project when I get that work implemented.

<br /><tr><td colspan="6">

## Database

Linking up to a DB for this effort is probably not necessary, I will be building out fixtures/mocks to display real data...

Due to how small this project is, avoiding all the configurations and complexities that come along with integrating a full ecosystem.

<br /><tr><td colspan="6">

## Licensing

Licensing is likely unnecessary for this initiative but may get something included here.

<br /><tr><table>