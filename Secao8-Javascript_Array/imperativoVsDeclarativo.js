const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
]

// imperativo
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)

/*
imperativo é mais importante o como fazer do que o que é preciso fazer

declarativo faz o que precisa fazer e depois faz as coisas, não importa como será feito
por exemplo, não importa como map e reduce funcionam, dado as declarações corretas, funciona
declarativo possibilita o reuzo de funções menores e mais específicas, ideia de funcional também
*/
// select codigo, nome, email from cliente where ativo = 1 é declarativo, não importa como vai fazer, mas sim o que vai fazer

