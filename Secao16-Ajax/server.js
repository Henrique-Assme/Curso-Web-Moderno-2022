const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //dentro da pasta atual, use os arquivos estáticos
app.use(bodyParser.urlencoded({ extended: true })) //transforma os dados do servidor em objeto
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalName}`)
    }
})
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err =>{
        if(err){
            return res.send('Ocorreu um erro.')
        }
        res.end('Concluido com sucesso')
    })
})


app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) =>{
    // req.body, req.query e req.params podem retornar o body
    // params vai direto na url, query teria um numero=3
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
app.listen(8080, () => console.log('Executando...'))
