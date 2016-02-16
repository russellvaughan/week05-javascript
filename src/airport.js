Airport = function(){	
	this.planes = []
};

Airport.prototype.isStormy = function() {
	true
};

Airport.prototype.land = function(plane) {
	this.planes.push(plane)
};

