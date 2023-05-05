

[![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

<br /><br />

# Name of the project <img align="right" valign="bottom" src="./img/logo.sm.svg" alt="Logo of the project" width="64">
> Vanilla isn't just for a flavor burst in your over-sugared coffee addiction, check it out!

This project is a Proof of Concept (POC) to showcase a stable vanilla typescript frontend implementation approach with [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components). Our goals is the trial and thorough documentation of risk-reward benefit analysis over the course of this projects lifespan.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up & running.

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

#### trigger this command to align the codebase format to our standardizations (code changes may occur)

```shell
npm run format

# RUNS
#   prettier --write --ignore-unknown
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

#### runs a linter over entire codebase (code changes may occur)

```shell
npm run lint

# RUNS
#   eslint **/*.{ts,tsx} --fix
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

Here you should say what actually happens when you execute the code above.

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

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).


## Configuration

Here you should write what are all of the configurations a user can enter when using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Style guide

Explain your code style and show how to check it.

## Api Reference

If the api is external, link to api documentation. If not describe your api including authentication methods as well as explaining all the endpoints with their required parameters.


## Database

Explaining what database (and version) has been used. Provide download links.
Documents your database design and schemas, relations etc...

## Licensing

State what the license is and how to find the text version of the license.
