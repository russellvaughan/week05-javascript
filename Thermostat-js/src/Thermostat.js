'use strict';
var DEFAULT_TEMP = 20;

function Thermostat(){
  this.temperature = DEFAULT_TEMP;
  this.maxTemp = 25;
  this.powerMode = 'on';
  this.displayColor = this.currentColor()
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

Thermostat.prototype.resetButton = function() {
  this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype.currentColor = function() {
  console.log("src file test yellow, temp should be 20 and is:" + this.temperature)
  console.log("src file test green, temp should be 17 and is:" + this.temperature)
  console.log("src file test red, temp should be 27 and is:" + this.temperature)
  if ((this.temperature >= 18) && (this.temperature < 25)) {
    return 'yellow'
   } 
    else if (this.temperature < 18) {
   return 'green'
   
   }
   else {
   return 'red'
   }




};