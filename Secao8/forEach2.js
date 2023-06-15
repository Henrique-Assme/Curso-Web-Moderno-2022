const foreach = function(array, funcao) {
    for(let i = 0; i < array.length; i++){
        funcao(array[i], i, array)
    }
}

const aprovados = ['Aluno1', 'Aluno2', 'Aluno3', 'Aluno4']

foreach(aprovados, function(nome, indice){
    console.log(`${indice+1}: ${nome}`)
})

Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function(nome, indice){
    console.log(`${indice+1}: ${nome}`)
})