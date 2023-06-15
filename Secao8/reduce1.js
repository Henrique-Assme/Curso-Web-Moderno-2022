const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulator, atual) {
    console.log(acumulator, atual)
    return acumulator + atual
}, 10) //segundo argumento é o valor inicial do acumulador

console.log(resultado)