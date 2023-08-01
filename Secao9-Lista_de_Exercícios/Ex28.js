const quantidadeDeDigitos = (array, quantidade) => {
    let resultado = []
    for(numero of array){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidade){
            resultado.push(numero)
        }
    }

    return resultado
}

console.log(quantidadeDeDigitos([38, 2, 365, 125, 10, 11], 2))
