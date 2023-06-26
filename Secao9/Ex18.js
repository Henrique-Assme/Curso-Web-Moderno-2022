const despesasTotais = function(produtos){
    const precos = produtos.map(produto => produto.preco)
    return precos.reduce((acumulador, preco) => acumulador+=preco)
}

console.log(despesasTotais([
    {
        nome: 'Jornal',
        categoria: 'Informação',
        preco: 89.99
    },
    {
        nome: 'Cinema',
        categoria: 'Entreterimento',
        preco: 150
    }
]))

console.log(despesasTotais([
    {
        nome: 'Galaxy S20',
        categoria: 'Eletrônicos',
        preco: 3599.99
    },
    {
        nome: 'Cinema',
        categoria: 'Entreterimento',
        preco: 30999.90
    }
]))