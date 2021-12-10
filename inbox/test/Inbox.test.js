const assert = require('assert') //(standard node lib) used for making assertion about test
const ganache = require('ganache-cli') // module to help create our local test network
const Web3 = require('web3') // important to note that Web3 starts with an uppercase, when we make use of web3 we are going to be requiring in a constructor function. so Web3 here is a constructor used to create instances of the web3 library
const web3 = new Web3(ganache.provider())

class Car {
	park() {
		return 'stopped'
	}

	drive() {
		return 'vroom'
	}
}

let car

beforeEach(() => {
	car = new Car()
})

describe('Motor', () => {
	it('Test park function', () => {
		assert.equal(car.park(), 'stopped')
	})

	it('can drive', () => {
		assert.equal(car.drive(), 'vroom')
	})
})
