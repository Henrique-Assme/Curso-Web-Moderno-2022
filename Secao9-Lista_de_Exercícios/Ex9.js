const tranformaEmArray = function(repetidor, quantidade) {
    let array = []
    for(let i = 0; i < quantidade; i++){
        array.push(repetidor)
    }
    return array
}

console.log(tranformaEmArray("código", 2))
console.log(tranformaEmArray(7, 3))