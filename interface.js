   $(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

   $('#increaseTemperature').on('click', function() { 
  thermostat.increaseTemperature(); 
  updateTemperature(); 
})

  $('#decreaseTemperature').click(function() { 
  thermostat.decreaseTemperature();
  updateTemperature();
})

  $('#powerSavingOn').click(function(){ 
  thermostat.powerSavingOn();
  updateTemperature();
 })

  $('#powerSavingOff').click(function(){
    thermostat.powerSavingOff();
  updateTemperature();
  })

  $('#reset').click(function(){
    thermostat.resetButton();
  updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class',thermostat.energyUsage());
  };

})  
