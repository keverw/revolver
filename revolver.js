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
	
	function _validID(id)
	{
		if (bullets.hasOwnProperty(id))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	
	function _findNextId(id)
	{
		var returnID = 1;
		
		for(var newID in bullets)
		{
		    if (bullets.hasOwnProperty(newID))
		    {
		    	if (newID > id)
		    	{
			    	returnID = newID;
			    	return returnID;
		    	}
		    }
		}
		
		return returnID;
	}
	
	function fire(callback)
	{
		var checkID = last;
		if (_validID(last))
		{
			last++;
		}
		else
		{
			var nextID = _findNextId(checkID);
			checkID = nextID;
			last = nextID + 1;
		}
		
		callback(checkID, bullets[checkID]);
	}
	
	function load(bullet)
	{
		var id = _grabNewID();
		bullets[id] = bullet;
		return id;
	}
	
	function remove(id)
	{
		if (_validID(id))
		{
			delete bullets[id];
			removedIDs.push(id);
		}
	}
	
	// Export public API
	var revolver = {};
	revolver.fire = fire;
	revolver.load = load;
	revolver.remove = remove;
	module.exports = revolver;
}());