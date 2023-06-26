const porta = 3003 //toda comunicação com rede precisa de uma porta

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./bancoDeDados')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.use(bodyParser.urlencoded({ extended: true })) //retorna uma função middleware
/*vai sempre passar pelo .use quando estiver fazendo qualquer requisição*/
app.get('/produtos', (req, res, next) => {
    res.send(dataBase.getProdutos()) //send vai converter para JSON
})

app.get('/produtos/:id', (req, res, next) => { // :nome do parâmetro que pega por req.params.nome
    res.send(dataBase.getProdutoById(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})