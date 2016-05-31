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





