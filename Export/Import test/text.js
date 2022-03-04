const os = require('os')
const {userName: user, sayHi} = require('./modules')
const name = 'Jonn'
console.log(sayHi(name));
console.log(os.platform(), os.release());