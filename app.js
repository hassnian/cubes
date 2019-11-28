const { Cube } = require("./models/Cube")
const { Space } = require("./models/Space")

const cubeDimensions = { x:5, y:5, z:5 }
const cube1Coordinates = { x:1, y:3, z:4 }
const cube2Coordinates = { x:3, y:4, z:4 }

const runApp = () => {

	const space = new Space()
	const cube1 = new Cube(cubeDimensions)
	const cube2 = new Cube(cubeDimensions)

	space.addObject(cube1,cube1Coordinates);
	space.addObject(cube2,cube2Coordinates);

	const intersections = space.calculateIntersectionOfAllPlanes()

	const isThereAnIntersection = space.checkIfThereIsAnIntersectionOnAllPlanes(intersections)

	if(!isThereAnIntersection){
		return 0
	}
	const intersectionCube = new Cube({x:intersections[0],y:intersections[1],z:intersections[2]})
	const intersectionCubeVolume = intersectionCube.calculateVolume()
	return intersectionCubeVolume
}

console.log(runApp())
