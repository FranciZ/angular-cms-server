# Minimal NodeJS API example with Express & MongoDB

## Requirements

* NodeJS installed (nodejs.org)
* MongoDB installed (mongodb.org)

* Running MongoDB in the background
```
$ mongod
```


## Overview

The server will run on port ```3000```

**Routes** are defined in ```/server/router.js```

API routes for interacting with the database are available on ```/api/{resourceName}```

Models are defined in ```/server/models/``` and required in ```/server/server.js``` after line ```13```


## Installation

```
$ git clone https://github.com/FranciZ/angular-cms-server.git
```
```
$ cd angular-cms-server
```
```
$ npm install
```

## Running

```
$ node run
```
or

```
$ supervisor run
```

