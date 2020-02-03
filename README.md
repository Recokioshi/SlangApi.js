# SlangApi.js

Helper for implementadors in SDL that lets you test some of out Slang api features in local environment

## Installation

Package will be deployed to npm soon

To make this project run, you have to have oracle database installed with all its additional needs. We use PL/SQL so all needed programs should be include, but if you use this tool in a system different that our standard company workstation, please follow steps described here:
https://oracle.github.io/node-oracledb/INSTALL.html#quickstart

### setup

Main place when tool is configured is /src/assets folder
this is place when 3 additional files should live:

- constants.json
- webForm.json
- SlangApiStandardDatabaseQuerries.ts

These filders cannot be hosted in git or npm because it contains inhouse company data. It will be hosted on company SVN or sent to you by email.

Additionaly in root folder, create .env file and 3 variables:

- DB_USER
- DB_PASS
  with database credentails, and
- CONNECT_STRING
  with string connection to database.
  You can copy it directly from tnsnames.ora you use for your pl/sql connections

## Run

If you cloned projest from GIT, use standard method in project root folder:

```bash
 yarn install
```

or

```bash
 npm install
```

To run package use command

```bash
 nodemon
```

which allows you to write code and see results without reloading

## How to use

Main script to run is /src/main.ts
All additional slang scripts are placed in /src/slangScripts

Few things to remember

- This environemnt doesn't load all scripts automaticly, to use functions from external scripts you have to import them with import or require
- all database-related functions like
  ```javascript
  restricted.generalSql;
  ```
  returns the promise, so please use them with async-await.
- to call externall function with
  ```javascript
  base.invokeProtected;
  ```
  this function have to be imported and exported with defaults in file /src/invokingFunctions.ts

Sample usage of all this techniques is ready after package installation

## Features

basic functionalities covered in this project

- base
  - createLongListProxy
  - create list proxy of types: ComplexShipment/Tslot/ManifestProxy
  - invokeProtected
  - eval
  - get(new)Shipment(s)/Tslot(s)/Manifest(s)
  - getGroup/Company/SolutionId
  - getLoggedInUser
  - log.debug
- restricted
  - generalSql
- webForm
  - getters/setters of fields defined in webForm.json - treated as string fields!
  - nesting fields in sections and collections with .get(index) and .create() functionality

WARNING!
Proxy Objects are returned with just .getDetails() content without translated dictionaries!! Be aware that data returned by these functions may be different that in slang scripts.

## disclaimer

I know that this functionality is very basic and doesn't cover even small part of what we need in slang, but this is proof of concept and it exists just to check if this kind of tool is even needed or not

## Contributing

Pull requests are welcome. Lots of features are missing. If you find this tool useful please expand its possibilities so everyone could use it more easily in the future
