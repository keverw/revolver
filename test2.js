var revolver = require('./revolver.js');

//add bullets
console.log(revolver.add('Hai'));
console.log(revolver.add('OMG'));
console.log(revolver.add('LMAO'));

revolver.remove(1);

console.log(revolver.removedIDs);

console.log(revolver.add('Hai #2', 1));

console.log(revolver.removedIDs);

//fire
revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});

revolver.fire(function(id, bullet)
{
	console.log(id, bullet);
});