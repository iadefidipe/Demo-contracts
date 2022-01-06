const path = require('path') // (standard node module) this path module is going to help us build a directory path from compile.js to our solidity code, the reason we are using the path module instead of just writing the path directly is because we are guranted to get cross platfrom compatibility
const fs = require('fs') // (standard node module) file system module
const solc = require('solc') // solidity compiler module

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol') // generating the path that point to the Inbox.sol file
const source = fs.readFileSync(inboxPath, 'utf8') // reading in the raw source code from our contract

module.exports = solc.compile(source, 1).contracts[':Inbox'] //export compile script and destructuring the compiled object
