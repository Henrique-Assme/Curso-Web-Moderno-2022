function somenteNumeros(array){
    let newArray = []
    newArray = array.filter(elemento => {
        return typeof elemento === 'number'
    })
    return newArray
}

console.log(somenteNumeros(['blabla', 1, "3", "web", 20]))