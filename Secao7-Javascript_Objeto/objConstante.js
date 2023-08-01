// pessoa aponta para um endereço de memória
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
//mudar um valor não altera o endereço de memória

// pessoa = {nome: 'Ana'}
//tentando fazer a constante pessoa apontar para outro endereco
 
Object.freeze(pessoa) // o objeto todo fica constante
pessoa.nome = 'Maria'
console.log(pessoa.nome)