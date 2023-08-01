const contarCaractere = function(caractere, texto){
    const letras = texto.split('')
    let count = 0
    letras.forEach(letra => {
        if(letra === caractere){
            count++
        }
    })
    return count
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('H', 'Henrique'))