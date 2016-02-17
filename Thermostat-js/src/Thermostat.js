'use strict';
var DEFAULT_TEMP = 20;

function Thermostat(){
  this.temperature = DEFAULT_TEMP;
  this.maxTemp = 25;
  this.powerMode = 'on';
};

Thermostat.prototype.upButton = function(){
  if (this.temperature === this.maxTemp) {
    throw new Error('temp cannot be higher than ' + this.maxTemp + 'dC');
  };
  this.temperature ++;
};

Thermostat.prototype.downButton = function(){
  if (this.temperature === 10){
    throw new Error('temp cannot be lower than 10dC');
  };
  this.temperature --;
};

Thermostat.prototype.powerSavingOn = function(){
  this.powerMode = 'on';
  this.maxTemp = 25;
};

Thermostat.prototype.powerSavingOff = function(){
  this.powerMode = 'off';
  this.maxTemp = 32;
};



