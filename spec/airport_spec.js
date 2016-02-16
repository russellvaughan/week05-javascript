
describe('airportTests', function(){	

var plane = jasmine.createSpy("plane")
var airport

beforeEach(function() {
	airport = new Airport()
});

	describe("landing a plane", function(){
		it('lands a plane',function(){
			spyOn(airport,"isStormy").and.returnValue(false)
			airport.land(plane)
			expect(airport.planes).toContain(plane)
		}); 

	});

	describe("depart a plane", function(){
		it('takes off a plane', function(){
			spyOn(airport,"isStormy").and.returnValue(false)
			airport.land(plane)
			airport.depart(plane)
			expect(airport.planes.length).toEqual(0)
		});

	});

	describe("prevents a plane from landing when stormy", function(){
		it("prevents a plane from landing", function(){
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

	describe("when an airport is full, it prevents landing", function(){
		it("prevents a plane from landing",function(){
			spyOn(airport,"isStormy").and.returnValue(false)
			var capacity = DEFAULT_CAPACITY;
			for (var i = 0; i < capacity; i++) {
				airport.land(plane)
			}
			expect(function(){
				airport.land(plane)}).toThrow("airport is full")
			

		});

	});


	describe("allows capacity that can be overridden", function(){
		it("#capacity that can be overridden", function(){
			airport.setCapacity(15)
			expect(airport.capacity).toEqual(15)
		})
	})


describe("when planes are not in airport, it prevents departure", function(){
	it("prevents departure", function(){
	spyOn(airport,"isStormy").and.returnValue(false)
	expect(function(){
		airport.depart(plane)}).toThrow("plane cannot depart as not in airport")
	
	});

});



});



