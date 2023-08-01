const objetoParaArray = array => {
    let chaves = Object.keys(array)
    let newArray = chaves.map(chave => [chave, array[chave]])
    return newArray
}

console.log(objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de Software'
}))