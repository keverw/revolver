var db_revolver = require('./revolver.js');

//add bullets
console.log(db_revolver.add('Hai'));
console.log(db_revolver.add('OMG'));
console.log(db_revolver.add('LMAO'));

db_revolver.remove(1);

console.log(db_revolver.removedIDs);

console.log(db_revolver.add('Hai #2', 1));

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

db_revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});