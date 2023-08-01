Array.prototype.filter2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            array.push(this[i])
        }
    }
    return array
}

const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true }, 
    { nome: 'iPad', preco: 4200, fragil: true },
    { nome: 'Copo de Vidro', preco: 12, fragil: true },
    { nome: 'Copo de Plástico', preco: 18, fragil: false }
]

let resultado = produtos.filter2(function(produto, indice, array) {
    return produto.preco > 30
})
console.log(resultado)
//array resultado terá quantidade igual ou menor de elementos que o array original
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter2(caro))
console.log(produtos.filter2(fragil))
console.log(produtos.filter2(fragil).filter2(caro))