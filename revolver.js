(function ()
{
	var newIDCounter = 1;
	var removedIDs = {};
	
	var bullets = {};
	var last = 1;
	
	function _grabNewID()
	{
		return newIDCounter++;
	}
	
	function _validID(id)
	{
		return (bullets.hasOwnProperty(id)) ? true : false;
	}
	
	function _findNextId(id)
	{
		var returnID = null;
		
		for (var newID in bullets)
		{
			if (bullets.hasOwnProperty(newID))
			{
				returnID = newID;
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
		if (_validID(checkID))
		{
			var nextID = last + 1;

			last = (_validID(nextID)) ? nextID : 1;
		}
		else
		{
			var nextID = _findNextId(checkID);
			
			checkID = nextID;
			last = nextID + 1;
		}
		
		callback(checkID, bullets[checkID]);
	}
	
	function add(bullet, replaceID)
	{
		if (replaceID) //add a new bullet using ID, to replace a bullet, removed or existing.
		{
			if (removedIDs.hasOwnProperty(replaceID))
			{
				delete removedIDs[replaceID];
			}
			
			bullets[replaceID] = bullet;
			
			return replaceID;
		}
		else //add a new bullet
		{
			var id = _grabNewID();
			bullets[id] = bullet;
			return id;
		}
	}
	
	function remove(id)
	{
		if (_validID(id))
		{
			delete bullets[id];
			removedIDs[id] = true;
		}
	}
	
	// Export public API
	var revolver = {};
	revolver.fire = fire;
	revolver.add = add;
	revolver.remove = remove;
	revolver.removedIDs = removedIDs;
	
	module.exports = revolver;
}());