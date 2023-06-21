const inverter = function(obj) {
    const newObj = {}
    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0, valor = 1
        newObj[parChaveValor[valor]] = parChaveValor[chave] 
    })
    return newObj
}

console.log(inverter({ a: 1, b: 2, c: 3 }))