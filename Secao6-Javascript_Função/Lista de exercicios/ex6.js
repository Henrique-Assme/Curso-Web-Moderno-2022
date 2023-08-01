const jurosSimples = (capitalInicial, juros, tempoAplicado) => {
    return capitalInicial + juros*capitalInicial*tempoAplicado
}

const jurosComposto = (capitalInicial, juros, tempoAplicado) => {
    return capitalInicial*((1+juros)**tempoAplicado)
}

console.log(jurosSimples(1000, 0.1, 10).toFixed(2))
console.log(jurosComposto(1000, 0.1, 5).toFixed(2))