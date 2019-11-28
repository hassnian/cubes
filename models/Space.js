class Space {
	constructor(){
		this.objectsInSpace = []
		this.planes = ["x","y","z"]
	}

	addObject(cube,coordinates){
		const objectInSpace = {
			object: cube,
			coordinates
		}
		this.objectsInSpace.push(objectInSpace)
	}

	getIndexObjectThatIsNearestToTheOrigin(plane){
		if(this.objectsInSpace[0].coordinates[plane] <= this.objectsInSpace[1].coordinates[plane]){
			return 0
		}
		return 1
	}

	getIndexOfFartherObjectGivingTheIndexNearest(nearestIndex){
		if(nearestIndex === 0){
			return 1
		}
		return 0
	}

	doTheCubesIntersect(cube1Line,cube2Line){
		return cube1Line.ends > cube2Line.starts
	}

	calculateIntersectionOfAPlane(plane){
		const indexOfNearest =this.getIndexObjectThatIsNearestToTheOrigin(plane)
		const fartherObject =  this.getIndexOfFartherObjectGivingTheIndexNearest(indexOfNearest)

		const cube1 = this.objectsInSpace[indexOfNearest]
		const cube2 = this.objectsInSpace[fartherObject]

		const cube1Line = { starts : cube1.coordinates[plane], ends: cube1.coordinates[plane] + cube1.object.dimensions[plane]}
		const cube2Line = { starts : cube2.coordinates[plane], ends: cube2.coordinates[plane] + cube2.object.dimensions[plane]}

		if(!this.doTheCubesIntersect(cube1Line,cube2Line)){
			return 0
		}

		const intersection = cube1Line.ends - cube2Line.starts

		return intersection
	}

	calculateIntersectionOfAllPlanes(){
		return this.planes.map((plane)=> {
			return this.calculateIntersectionOfAPlane(plane)
		})
	}

	checkIfThereIsAnIntersectionOnAllPlanes(intersections){
		if(intersections.includes(0)){
			return false
		}
		return true
	}


}
module.exports = { Space }
