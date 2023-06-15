const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //retira o ultimoelemento
console.log(pilotos)
pilotos.push('Verstappen') //coloca no final
console.log(pilotos)
pilotos.shift() //tira do começo
console.log(pilotos)
pilotos.unshift('Hamilton') //coloca no começo
console.log(pilotos)

//splice adiona e tira do array
//add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
//remove
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a parti do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(2, 4) //cria um novo array a parti do indice inicial até o final (não inclui o final)
console.log(algunsPilotos2)