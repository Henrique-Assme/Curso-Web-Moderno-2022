const _ = require('lodash') //procura lodash em node_modules
setInterval(() => console.log(_.random(1, 1000)), 2000)