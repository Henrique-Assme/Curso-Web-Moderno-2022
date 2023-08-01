const somaTudo = array => {
    return array.reduce((acumulador, valor) => acumulador += valor)
}

console.log(somaTudo([1,2,3,4,5]))