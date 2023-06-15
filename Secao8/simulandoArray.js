const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bruna'
}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function(){return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0])
console.log(quaseArray[1])
console.log(quaseArray[2])

const meuArray = ['Rafael', 'Ana', 'Bruna']
console.log(quaseArray.toString(), meuArray)