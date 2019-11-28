class Space {
	constructor(){
		this.objectsInSpace = []
	}
	addObject(cube,coordinates){
		const objectInSpace = {
			object: cube,
			coordinates
		}
		this.objectsInSpace.push(objectInSpace)
	}
}
module.exports = { Space }
