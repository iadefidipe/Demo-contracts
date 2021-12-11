const assert = require('assert') //(standard node lib) used for making assertion about test
const ganache = require('ganache-cli') // module to help create our local test network
const Web3 = require('web3') // important to note that Web3 starts with an uppercase, when we make use of web3 we are going to be requiring in a constructor function. so Web3 here is a constructor used to create instances of the web3 library
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')

let accounts

let inbox

beforeEach(async () => {
	//Get a list of all accounts
	accounts = await web3.eth.getAccounts()

	//use one of those accounts to deploy the contract
	inbox = await new web3.eth.Contract(JSON.parse(interface)) // tell web3 what method/structure the inbox contract has
		.deploy({ data: bytecode, arguments: ['Hi there!'] }) // tell web3 we want to deply a new contract
		.send({ from: accounts[0], gas: '1000000' }) // instructs web3 to send out a transaction that creates this contract
})

describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address)
	})

	it('has a default message', async () => {
		const message = await inbox.methods.message().call()
		assert.equal(message, 'Hi there!')
	})
})

// simple mocha logic
// class Car {
// 	park() {
// 		return 'stopped'
// 	}

// 	drive() {
// 		return 'vroom'
// 	}
// }

// let car

// beforeEach(() => {
// 	car = new Car()
// })

// describe('Motor', () => {
// 	it('Test park function', () => {
// 		assert.equal(car.park(), 'stopped')
// 	})

// 	it('can drive', () => {
// 		assert.equal(car.drive(), 'vroom')
// 	})
// })
