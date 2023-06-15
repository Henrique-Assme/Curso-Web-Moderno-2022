console.log(typeof Array, typeof new Array)
//array é um objeo, não existe array nativo no js

let aprovados = new Array('Bia', 'Calos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Bruna')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) //os elementos 5, 6,7,8 são undefined
aprovados.sort() //método que altera o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2) //a partir do indice 1 deleta 1 conteudo
console.log(aprovados)
aprovados.splice(1, 0, 'Calos', 'Ana') //adiciona também
console.log(aprovados)
aprovados.splice(0, 0, 'OI') //adiciona sempre antes do indice colocado
console.log(aprovados)
