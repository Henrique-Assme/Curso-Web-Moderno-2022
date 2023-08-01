// operador ...rest(juntar)/spread(espalhar)

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario} //spread nos atributos e funcionario
console.log(clone)

// spread com array
const grupoA = ['Joao', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)