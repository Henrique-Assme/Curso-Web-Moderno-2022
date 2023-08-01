const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "caderno", "preco": 19.90}',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ "nome": "caneta", "preco": 7.50}',
]

Array.prototype.map2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i], i, this))
    }
    return array
}

let resultado = carrinho.map2(function(valor, indice) {
    return JSON.parse(valor).preco
})
console.log(resultado) 