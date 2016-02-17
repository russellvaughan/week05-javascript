
'use strict';

describe('featureTests', function(){	

	var airport;
	var plane; 
	var weather;

	beforeEach(function() {
		plane = new Plane();
		airport = new Airport();

	});

	describe("when the weather is stormy",function(){

		describe("prevents a plane from landing when stormy", function(){
			it("prevents a plane from landing", function(){
				spyOn(airport,"isStormy").and.returnValue(true)
				expect(function(){
					airport.land(plane)}).toThrow("unsafe flying conditions")
			});
		});


		describe("prevents a plane from departing when stormy", function(){
			it("stops planes from landing", function(){
				spyOn(airport,"isStormy").and.returnValue(false)
				airport.land(plane)
				airport.isStormy.and.returnValue(true)
				expect(function(){
					airport.depart(plane)}).toThrow("unsafe flying conditions")
			});
		});
	});

	describe("when the weather is sunny",function(){

		describe("landing a plane", function(){
			it('lands a plane',function(){
				spyOn(airport,"isStormy").and.returnValue(false)
				airport.land(plane)
				expect(airport.planes).toContain(plane)
			}); 
		});

		describe("depart a plane", function(){
			it('depart off a plane', function(){
				spyOn(airport,"isStormy").and.returnValue(false)
				airport.land(plane)
				airport.depart(plane)
				expect(airport.planes.length).toEqual(0)
			});
		});

		describe("when an airport is full, it prevents landing", function(){
			it("prevents a plane from landing",function(){
				spyOn(airport,"isStormy").and.returnValue(false)
				var capacity = 10;
				for (var i = 0; i < capacity; i++) {
					airport.land(plane)
				}
				expect(function(){
					airport.land(plane)}).toThrow("airport is full")
			});
		});


		describe("when planes are not in airport, it prevents departure", function(){
			it("prevents departure", function(){
				var plane = new Plane()
				var airport = new Airport()
				spyOn(airport,"isStormy").and.returnValue(false)
				expect(function(){
					airport.depart(plane)}).toThrow("plane cannot depart as not in airport")

			});
		});
	});


describe("allows capacity that can be overridden", function(){
	it("#capacity that can be overridden", function(){
		var airport = new Airport()
		airport.setCapacity(15)
		expect(airport.capacity).toEqual(15)
	})
})


	describe("weather", function(){
	it('returns true when it is stormy', function(){
	weather = new Weather()
	spyOn(Math,'random').and.returnValue(true)
	expect(weather.forecast()).toEqual(true)
	});
	});

	describe("weather", function(){
	it('returns false when it is sunny', function(){
	weather = new Weather()
	spyOn(Math,'random').and.returnValue(false)
	expect(weather.forecast()).toEqual(false)
	});
	});


});



