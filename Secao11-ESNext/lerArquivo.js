const fileSystem = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fileSystem.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))