const path = require('path') // (standard node lib) this path module is going to help us build a path/ directory path from compile.js to our solidity code, the reason we are using the path module instead of just writing the path direct is that we are guranted to get cross platfrom compatibility
const fs = require('fs') // (standard node lib) file system module
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol') // generating the path that point to the Inbox.sol file
const source = fs.readFileSync(inboxPath, 'utf8') // reading in the raw source code from our contract

module.exports = solc.compile(source, 1).contracts[':Inbox'] //export compile script
