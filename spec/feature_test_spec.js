describe("landing a plane", function(){
	it('lands a plane',function(){
		var plane, airport
		plane = new Plane()
		airport = new Airport()
		spyOn(airport,"isStormy").and.returnValue(false)
		airport.land(plane)
		expect(airport.planes).toContain(plane)
	}); 

});