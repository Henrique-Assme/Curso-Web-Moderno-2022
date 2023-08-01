Array.prototype.reduce2 = function(callback, initialValue){
    let acumulador = initialValue || this[0]
    const inidiceInicial = initialValue ? 0 : 1
    for(let i = inidiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(`Todos são bolsistas? ${
    alunos.map(aluno => aluno.bolsista).reduce2(todosBolsistas)
}`)

//desafio 2: algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(`Algum é bolsista? ${
    alunos.map(aluno => aluno.bolsista).reduce2(algumBolsista)
}`)

const resultado = alunos.map(a => a.nota).reduce2(function(acumulator, atual) {
    console.log(acumulator, atual)
    return acumulator + atual
}, 10) //segundo argumento é o valor inicial do acumulador

console.log(resultado)