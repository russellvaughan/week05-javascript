'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat(); 
  });
  
  describe('#default', function(){
    it('has a starting temp of 20 degrees', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('has a minimum temp of 10 degrees', function(){
      for (var i = 1; i <= 10; i++) {
        thermostat.downButton();
      }; 
      expect(  function(){
        thermostat.downButton() }).toThrowError('temp cannot be lower than 10dC');
    });
    it('has power saving mode on', function(){
      expect(thermostat.powerMode).toEqual('on');
    }); 

  });  

  describe('#upButton', function(){ 
    it('increase temperature when pressing up', function(){
      thermostat.upButton();
      expect(thermostat.temperature).toEqual(21); 
    });

  });
  describe('#downButton', function(){ 
    it('decrease temperature when pressing down', function(){
      thermostat.downButton();
      expect(thermostat.temperature).toEqual(19); 
    });

  });

  describe('#powerSavingOn', function(){
    it('sets the maximum temperature to 25dC', function(){
      thermostat.powerSavingOn();
      expect(thermostat.powerMode).toEqual('on');
      expect(thermostat.maxTemp).toEqual(25);
    }); 
    it('throws an error when trying to go above max temp 25dC', function(){
      for (var i = 1; i <= 5; i++) {
        thermostat.upButton();
      }; 
      expect(  function(){
        thermostat.upButton() }).toThrowError('temp cannot be higher than 25dC');
    });
    it('throws an error when trying to go above max temp 32dC', function(){
      thermostat.powerSavingOff();
      for (var i = 1; i <= 12; i++) {
        thermostat.upButton();
      }; 
      expect(  function(){
        thermostat.upButton() }).toThrowError('temp cannot be higher than 32dC');
    });
    
  });

  describe('#powerSavingOff', function(){
    it('limits the maximum temperature to 32dC', function(){
      thermostat.powerSavingOff();
      expect(thermostat.powerMode).toEqual('off');
      expect(thermostat.maxTemp).toEqual(32);
    }); 
  });


  describe('#resetButton', function(){
    it('resets the temperature back to 20dC',function(){
      thermostat.resetButton()
      expect(thermostat.temperature).toEqual(20);
    });
  });


  describe('color display', function(){});
  it('is yellow between 18-24 dC',function(){
    expect(thermostat.displayColor).toEqual('yellow')
  });


});

