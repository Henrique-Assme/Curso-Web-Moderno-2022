const somenteParesEmDobro = function(array){
    let newArray = []
    newArray = array.filter((numero, indice) => {
        if(numero % 2 === 0 && indice % 2 === 0) return numero
    })
    return newArray
}

console.log(somenteParesEmDobro([1,2,3,4]))
console.log(somenteParesEmDobro([10,70,22,43]))