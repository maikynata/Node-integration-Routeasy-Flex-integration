# RoutEasy x ERP FlexDB Node.js Integration Project v1.0.0
This is a **project example** that provides an integration data between RoutEasy Service and the ERP FlexDB.

## Prerequisites
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager.

## Quick Install
The first thing you should do is install the Node.js dependencies. To learn more about the modules installed visit the NPM & Package.json section.

```bash
$ npm install
```

## Setup Your Credentials
To run this project you might have a RoutEasy account. Then you need to setup your credentials inside `config.json` file.
```
"credentials":
{
    "username": "SEU_USUARIO",
    "password": "SUA_SENHA"
}
```
Setup the same, for the `configFlex.json` file, to login on FLexDB RpServices.

## Running Your Application
After the install process is over, you'll be able to run the application. Just run node:

```bash
$ node index.js
```

## Wiki
You can see step by step the routing process and how to use all RoutEasy's features in our [Wiki](https://github.com/RoutEasy/routeasy-node-project/wiki) (pt-BR).

## Documentation RoutEasy and FlexDB
All endpoints are available in the [docs](http://docs.routeasy.com.br) section of RoutEasy website.
All endpoints are available in the [docs](http://servicosflex.rpinfo.com.br:9000/v1.0/documentacao) section of FlexDB RP Services website.