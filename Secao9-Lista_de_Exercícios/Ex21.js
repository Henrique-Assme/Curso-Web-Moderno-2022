const oMenor = array => {
    return array.reduce(function(resultado, valor){
        if(valor < resultado){
            resultado = valor
        }
        return resultado
    })
}

console.log(oMenor([10, 5, 35, 65]))
console.log(oMenor([5, -15, 50, 3]))