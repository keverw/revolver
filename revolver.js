(function ()
{
	var newIDCounter = 1;
	var removedIDs = [];
	
	var bullets = {};
	var last = 1;
	
	function _grabNewID()
	{
		return newIDCounter++;
	}
	
	function fire(callback) //based on http://stackoverflow.com/questions/6731214/node-mysql-connection-pooling
	{	
		//var cli = bullets[last];
		//last++;
		//if (last == bullets.length) // cyclic increment
		//{
		//	last = 0;
		//}
		//return cli;
	}
	
	function load(bullet)
	{
		var id = _grabNewID();
		bullets[id] = bullet;
		return id;
	}
	
	function remove(id)
	{
		
	}
	
	// Export public API
	var revolver = {};
	revolver.fire = fire;
	revolver.load = load;
	revolver.remove = remove;
	module.exports = revolver;
}());