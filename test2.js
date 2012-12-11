var db_revolver = require('./revolver.js');

//add bullets
console.log(db_revolver.load('Hai'));
console.log(db_revolver.load('OMG'));
console.log(db_revolver.load('LMAO'));

db_revolver.remove(1);

console.log(db_revolver.removedIDs);

//fire
db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});