const os = require('os')

console.log('Operation system: ', os.platform())
console.log('Arch: ', os.arch())
console.log('Infromation about processoer: ', os.cpus())
console.log('Free RAM: ', os.freemem())
console.log('Total RAM: ', os.totalmem())
console.log('Home Directory: ', os.homedir())
console.log('Time ON system: ', os.uptime()+'s')