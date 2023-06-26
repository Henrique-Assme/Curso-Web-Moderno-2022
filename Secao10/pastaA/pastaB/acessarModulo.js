const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao') //dessae jeito vai procurar no node modules por esse módulo e procura o arquivo index.js
console.log(saudacao.ola)

const c = require('./pastaC') // procura dentro da pasta o arquivo index
console.log(c.ola)

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)
