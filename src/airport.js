var DEFAULT_CAPACITY = 10

Airport = function(){	
	this.planes = []
	this.capacity = DEFAULT_CAPACITY
};

Airport.prototype.isStormy = function() {
	return true
};

Airport.prototype.land = function(plane) {
	if(this.isStormy()){
		throw "unsafe flying conditions";
	} else if (this.planes.length >= this.capacity){
		throw "airport is full"
	} 
	this.planes.push(plane)
};

Airport.prototype.depart = function(plane) {
	if(this.isStormy()){
		throw "unsafe flying conditions";
	} else if (this.planes.length === 0){
		throw "plane cannot depart as not in airport"
	}
	var idx = this.planes.indexOf(plane);
	this.planes.splice(idx, 1)

}

Airport.prototype.setCapacity = function(number) {
	this.capacity = number
};