const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.text()) //qualquer texto é interpretado
app.use(bodyParser.json()) //interpreta JSON agora
app.get('/opa', (require, response, next) => { //use responde para todos os métodos http
    response.json([
        {id: 7, nome: 'Ana', position:1},
        {id: 34, nome: 'Bruna', position:2},
        {id: 73, nome: 'Clara', position:3},
    ])
    next()
    // response.json({
    //     name: 'iPad 32GB',
    //     price: 1899,
    //     discount: 0.12
    // })
    // response.send('Estou <strong>bem!')
})

app.get('/cliente/relatorio', (req, res, next) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res, next) => {
    // let corpo = ''
    // req.on('data', function(parte){
    //     corpo += parte
    // })
    // req.on('end', function() {
    //     res.send(corpo)
    // })
    res.send(req.body) //body-parser já deixa tudo pronto no body
})

app.get('/cliente/:id', (req, res, next) => {
    res.send(`cliente ${req.params.id} selecionado`)
})


app.use('/opa', (req, res) => {
    console.log('Agora serei chamado!')
})

app.listen(3000, () => {
    console.log('Backend executando')
}) //carrega na pasta 3000