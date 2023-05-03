# About project

## Angular Authentication project is about:

- concepts of authentication in angular;
- concepts of route guard;
- concepts of http interceptor.

The project uses JSON server fake REST API.

# Getting Started Angular Project

## Installation

### Install Angular CLI

```bash
npm i @angular/cli
```

### Create Angular node_modules folder

```bash
npm install
```

### Run Angular Authentication project

Run ng serve for a dev server. Navigate to http://localhost:4200/

```bash
ng serve
```

# Npm Install JSON server

### Install Json-server

```bash
npm i json-server


```

### Install Json-server-auth

```bash
npm install express json-server json-server-auth --save
```

### Run JSON-server

```bash
json-server db.json -m ./node_modules/json-server-auth -r routes.json
```
