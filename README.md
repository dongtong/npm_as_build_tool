## NPM As Build Tool

### Why use npm as build tool

 - [npm vs gulp](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.2r5thdmby)

### Run Test

    $ npm run-script test
    $ npm run test
    $ npm test
    $ npm tst
    $ npm t

Run npm script in silent mode

    $ npm test -s


### Run script pre- and post-

    $ npm run pretest
    $ npm test -s

customize hooks

    $ npm run greet -s


Run npm script sequence as following:

    prescriptname -> scriptname -> postscriptname

### Run many script
    
    "scripts": {
        "compile": "npm run compile:coffee && npm run compile:es6"
    }

    $ npm run compile

If the first script run failed, and then left script will not run.

### clean files or directories

For windows platform, we could use rimraf package

    $ npm install rimraf --save-dev

### NPM operators

1. && 

If the left operation failed, the right operation will not run

2. |

The left operation result will be the right command first parameter

3. >

4. --

It could allow to pass argument throught underline commander

The left operation result will be writen to right destination file.

### NPM Commander

1. npm --help

To see all of avaiable npm commanders

2. npm run

To check which script command you could use


### pipeline

Before script

    "build:bundle": "browserify ./src/app.js -o ./public/js/bundle.js",
    "build:uglify": "uglifyjs ./src/app.js -mc -o ./public/js/bundle.min.js"

After pipeline

    "build:bundle": "browserify ./src/app.js | uglifyjs -mc > ./public/js/bundle.js"

The | left commander output as second command first parameter

### build script procedure

    "build:clean": "rimraf public/css/* public/js/*",
    "prebuild": "npm run build:clean",
    "build": "npm run compile:less && npm run build:bundle"

1. run "prebuild": "npm run build:clean"

2. run "rimraf public/css/* public/js/*"

3. run "npm run compile:less" and related hooks script

4. run npm run build:bundle and related hooks script

### watch

- client watch(watch, watchify)

- server watch(nodemon)





