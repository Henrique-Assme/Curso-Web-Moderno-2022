const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => [].concat(...turmas))
//     .then(alunos => alunos.map(aluno => aluno.nome))
//     .then(nomes => console.log(nomes))
//     .catch(e => console.log(e.message))

let obterAlunos = async () => { // async no começo da função permite colocar await
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} //retorna um objeto do tipo AssyncFunction
obterAlunos()
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))  