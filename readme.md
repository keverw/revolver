# Revolver #
**Version 2.0**

A simple generic round-robin resource manager. Great for database connections pools.

## Setup ##

To set up diskspace.js on your Node.js server use npm.

    npm install revolver

## Sample Usage: ##
```
var revolver = require('./revolver.js');

revolver.add('Hai'); //adds a bullet and returns it's id

//fire
revolver.fire(function(id, bullet) //fire the bullets(They don't really disappear, just moves to the end of the line)
{
	console.log(id, bullet);
});

revolver.remove(1); //remove's a id

revolver.add('Hai', 1); //replace a bullet by id

```
This can be used to store strings or just about anything.