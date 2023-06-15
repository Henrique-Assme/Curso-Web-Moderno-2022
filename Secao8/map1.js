const nums = [1,2,3,4,5]

let resultado = nums.map(value => value*2) //map gera um novo array, não modifica
console.log(resultado)

const soma10 = value => value+10
const triplo = value => value*3
const paraDinheiro = value => `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)