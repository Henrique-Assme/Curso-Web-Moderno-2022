const multiplicacaoFeia = (numero1, numero2) => {
    let resultado = 0
    for(let i = 0; i < numero2; i++){
        resultado += numero1
    }
    return resultado
}

console.log(multiplicacaoFeia(5,5))
console.log(multiplicacaoFeia(0,7))
console.log(multiplicacaoFeia(7,0))