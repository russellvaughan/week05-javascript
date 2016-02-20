   $(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();


$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=f93721de51a261bed72bb940913fb832&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})


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
  $('#temperature').attr('class', thermostat.checkColor());
}

})  

   // a526526e1fed472c354668fda0f0d021

