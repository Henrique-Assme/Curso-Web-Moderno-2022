const fileSystem = require('fs')
const caminho = __dirname + '/arquivo.json' //__dirname é o diretório atual

// sincrono
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// para ler json é muito mais fácil que isso
const config = require('./arquivo.json') //já vem como arquivo
console.log(config.db)

fileSystem.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta:')
    console.log(arquivos)
})