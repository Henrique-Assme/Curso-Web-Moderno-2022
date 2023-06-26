const negado = valor => {
    if(typeof valor === 'boolean'){
        return !valor
    }else if(typeof valor === 'number'){
        return -valor
    }else{
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(negado(true))
console.log(negado("6"))
console.log(negado(-2000))
console.log(negado("Programação"))