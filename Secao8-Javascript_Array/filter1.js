const produtos = [
    { nome: 'Notebook', preco: 2500, fragil: true }, 
    { nome: 'iPad', preco: 4200, fragil: true },
    { nome: 'Copo de Vidro', preco: 12, fragil: true },
    { nome: 'Copo de Plástico', preco: 18, fragil: false }
]

let resultado = produtos.filter(function(produto, indice, array) {
    return produto.preco > 30
})
console.log(resultado)
//array resultado terá quantidade igual ou menor de elementos que o array original
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))
console.log(produtos.filter(fragil).filter(caro))