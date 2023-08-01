const mediaAritmetica = function(numeros){
    return numeros.reduce((acumulador, valor) => acumulador += valor)/numeros.length
}

console.log(mediaAritmetica([0,10]))
console.log(mediaAritmetica([1,2,3,4,5]))