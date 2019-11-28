class Cube{
	constructor(dimensions){
		this.dimensions = dimensions
	}

	calculateVolume(){
		const {x,y,z} = this.dimensions
		return x * z * y
	}
}
module.exports = { Cube }
