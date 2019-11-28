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

	it('should return 0 when calculating the intersection in one plane where there is no intersection ',  ()  => {
		const cubeDimensions = { x:5, y:5, z:5 }
		const cube1Coordinates = { x:1, y:3, z:4 }
		const cube2Coordinates = { x:10, y:4, z:4 }
		const checkingPlane = "x"
		const expectedIntersectionLength = 0

		const space = new Space()
		const cube1 = new Cube(cubeDimensions)
		const cube2 = new Cube(cubeDimensions)

		space.addObject(cube1,cube1Coordinates);
		space.addObject(cube2,cube2Coordinates);

		const intersectionLength = space.calculateIntersectionOfPlanes(checkingPlane)
		expect(intersectionLength).toBe(expectedIntersectionLength)
	});

	it('should return the intersection when there is one ',  ()  => {
		const cubeDimensions = { x:5, y:5, z:5 }
		const cube1Coordinates = { x:1, y:3, z:4 }
		const cube2Coordinates = { x:3, y:4, z:4 }
		const checkingPlane = "x"
		const expectedIntersectionLength = 3

		const space = new Space()
		const cube1 = new Cube(cubeDimensions)
		const cube2 = new Cube(cubeDimensions)

		space.addObject(cube1,cube1Coordinates);
		space.addObject(cube2,cube2Coordinates);

		const intersectionLength = space.calculateIntersectionOfPlanes(checkingPlane)
		expect(intersectionLength).toBe(expectedIntersectionLength)
	});

	it('should return false when  there is not an intersection  ',  ()  => {
		const firstLine = { starts : 0 ,ends: 9}
		const secondLine = { starts : 10,ends: 100}
		const expectedResult = false

		const space = new Space()
		const doIntersect = space.doTheCubesIntersect(firstLine,secondLine)

		expect(doIntersect).toBe(expectedResult)
	});
	it('should return true when  there is  an intersection  ',  ()  => {
		const firstLine = { starts : 0 ,ends: 9}
		const secondLine = { starts : 5,ends: 100}
		const expectedResult = true

		const space = new Space()
		const doIntersect = space.doTheCubesIntersect(firstLine,secondLine)

		expect(doIntersect).toBe(expectedResult)
	});

	it('should return  0 when getting the nearest object to the origin is the first ',  ()  => {
		const cubeDimensions = { x:5, y:5, z:5 }
		const cube1Coordinates = { x:1, y:3, z:4 }
		const cube2Coordinates = { x:3, y:4, z:4 }
		const checkingPlane = "x"
		const expectedIndex  =  0

		const space = new Space()
		const cube1 = new Cube(cubeDimensions)
		const cube2 = new Cube(cubeDimensions)

		space.addObject(cube1,cube1Coordinates);
		space.addObject(cube2,cube2Coordinates);

		const nearestToTheOrigin = space.getIndexObjectThatIsNearestToTheOrigin(checkingPlane)
		expect(nearestToTheOrigin).toBe(expectedIndex)
	});

	it('should return 1  when getting the nearest object to the origin is the second object',  ()  => {
		const cubeDimensions = { x:5, y:5, z:5 }
		const cube1Coordinates = { x:1, y:3, z:4 }
		const cube2Coordinates = { x:3, y:4, z:4 }
		const checkingPlane = "x"
		const expectedIndex  =  1

		const space = new Space()
		const cube1 = new Cube(cubeDimensions)
		const cube2 = new Cube(cubeDimensions)

		space.addObject(cube2,cube2Coordinates);
		space.addObject(cube1,cube1Coordinates);

		const nearestToTheOrigin = space.getIndexObjectThatIsNearestToTheOrigin(checkingPlane)
		expect(nearestToTheOrigin).toBe(expectedIndex)
	});

	it('should return 1 if the nearest is the 0',  ()  => {
		const expectedIndex  =  1
		const nearest = 0

		const space = new Space()

		const fartherObject= space.getIndexOfFartherObjectGivingTheIndexNearest(nearest)
		expect(fartherObject).toBe(expectedIndex)
	});
	it('should return 0 if the nearest is the 1',  ()  => {
		const expectedIndex  =  0
		const nearest = 1

		const space = new Space()

		const fartherObject= space.getIndexOfFartherObjectGivingTheIndexNearest(nearest)
		expect(fartherObject).toBe(expectedIndex)
	});
})
