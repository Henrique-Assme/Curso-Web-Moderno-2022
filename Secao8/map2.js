const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 19.90}',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ "nome": "caneta", "preco": 7.50}',
]

//retornar um array apenas com os precos

let resultado = carrinho.map(function(valor, indice) {
    return JSON.parse(valor).preco
})
console.log(resultado)

//ou

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)