const saudacao = 'opa'; //contexto léxico 1

function exec(){
    const saudacao = 'falaa';// contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de chave/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);