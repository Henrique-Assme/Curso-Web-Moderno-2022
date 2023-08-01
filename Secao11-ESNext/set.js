//não indexado e não aceita repetição
const times = new Set()
times.add('Vasco').add('São Paulo').add('Corinthians').add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('São Paulo')
console.log(times.has('São Pualo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)