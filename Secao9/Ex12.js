function removeProriedade(objeto, propriedade){
    let newObj = objeto
    delete newObj[propriedade]
    return newObj
}

console.log(removeProriedade({a:1, b:2}, 'a'))
console.log(removeProriedade({
    id: 20,
    nome: 'Caneta',
    descricao: 'Não preenchido'
}, 'descricao'))
