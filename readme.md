# Revolver #

A simple generic round-robin. Great for database connections pools.

## Setup ##

To set up diskspace.js on your Node.js server use npm.

    npm install revolver

## Sample Usage: ##
```
var test_revolver = require('revolver');
//Load bullets
test_revolver.load('Hai');
test_revolver.load('OMG');
//fire the bullets(They don't really disappear, just moves to the end of the line)
console.log(test_revolver.fire())
console.log(test_revolver.fire())
```
This can be used to store strings or anymost anything.