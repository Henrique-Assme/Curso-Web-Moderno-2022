const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //vai procurar valor no contexto em que foi definida, nesse caso o global
}

exec()