const estaEntre = function(numero, minimo, maximo, inclusivo = false) {
    if(inclusivo){
        return numero >= minimo && numero <= maximo
    }else{
        return numero > minimo && numero < maximo
    }
}

console.log(estaEntre(60,50,100))
console.log(estaEntre(16,100,160))
console.log(estaEntre(3,3,150))
console.log(estaEntre(3,3,150, true))