const segundoMaior = numeros => {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero !== maiorNumero)
    return Math.max(...numeros)
}

console.log(segundoMaior([12,16,1,5]))
console.log(segundoMaior([8,4,5,6]))