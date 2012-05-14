# revolver #

A simple generic round-robin. Great for database connections pools.

## Sample Usage: ##
```
var test_revolver = require('./revolver.js');
//Load bullets
test_revolver.load('Hai');
test_revolver.load('OMG');
//fire the bullets(They don't really disappear, just moves to the end of the line)
console.log(db_revolver.fire())
console.log(db_revolver.fire())
```
This can be used to store strings or anymost anything.