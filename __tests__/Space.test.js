const  { Cube } = require("../models/Cube")
const  { Space } = require("../models/Space")

describe("space",()=>{
	it('should add object to the space with the coordinates',  ()  => {
		const cubeDimensions = { x:5, y:5, z:5 }
		const cubeCoordinates = { x:1, y:3, z:4 }
		const space = new Space()
		const cube = new Cube(cubeDimensions)
		const expectedObjectInSpace = { object: cube , coordinates : cubeCoordinates }
		space.addObject(cube,cubeCoordinates);
		const objectInSpace = space.objectsInSpace[0]
		expect(objectInSpace).toMatchObject(expectedObjectInSpace)
	});
})
