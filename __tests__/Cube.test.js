const  { Cube } = require("../models/Cube")


describe("cube",()=>{
	it('should return 125 when calculating the volume of a cube of 5^3 ',  ()  => {
		const dimensions = {
			x:5,
			y:5,
			z:5
		}
		const expectedVolume = 125
		const cube = new Cube(dimensions)
		const volume = cube.calculateVolume()
		expect(volume).toBe(expectedVolume)
	});
})
