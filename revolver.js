(function ()
{

    var bullets = [];
    var last = 0;

    function fire() //based on http://stackoverflow.com/questions/6731214/node-mysql-connection-pooling
    {
        var cli = bullets[last];
        last++;
        if (last == bullets.length) // cyclic increment
        {
            last = 0;
        }
        return cli;
    }

    function load(bullet)
    {
        bullets.push(bullet);
    }

    // Export public API
    var revolver = {};
    revolver.fire = fire;
	revolver.load = load;
    module.exports = revolver;
}());