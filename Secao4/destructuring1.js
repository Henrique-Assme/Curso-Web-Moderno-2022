const pessoa ={
    nome:'ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade: i, banana } = pessoa //um pattern matching com nome e idade
console.log(nome, i, banana) //banana não definido

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)