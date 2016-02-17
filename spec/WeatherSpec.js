describe("weather", function(){
it('returns true when it is stormy', function(){
var weather = new Weather()
spyOn(Math,'random').and.returnValue(true)
expect(weather.forecast()).toEqual(true)
});
});

describe("weather", function(){
it('returns true when it is sunny', function(){
var weather = new Weather()
spyOn(Math,'random').and.returnValue(false)
expect(weather.forecast()).toEqual(false)
});
});

