const resultadoBasquete = function(pontuacao){
    const resultados = pontuacao.split(" ")
    let maior = resultados[0]
    let menor = resultados[0]
    let indiceMenor = 0
    let superouMaior = 0
    for(i in resultados){
        if(resultados[i] > maior){
            superouMaior++
            maior = resultados[i]
        }else if(resultados[i] < menor){
            indiceMenor = i
            menor = resultados[i]
        }
    }
    return [superouMaior,parseInt(indiceMenor)+1]
}

console.log(resultadoBasquete('30 40 20 4 51 25 42 38 56 0'))