'use strict';

function Weather(){};

Weather.prototype.forecast = function() {
return this._generateWeather();
};

Weather.prototype._generateWeather = function() {
	return (Math.random() >= 0.80) 
};