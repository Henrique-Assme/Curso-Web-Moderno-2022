const aprovados = ['Aluno1', 'Aluno2', 'Aluno3', 'Aluno4']

aprovados.forEach(function(nome, indice, todoArray) { //manda o valor, indice e o array inteiro para a função callback
    console.log(`${indice+1}: ${nome}`)
})

aprovados.forEach(nome => {
    console.log(nome)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
