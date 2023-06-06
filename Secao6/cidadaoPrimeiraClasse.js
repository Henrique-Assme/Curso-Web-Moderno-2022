// função funciona como dados, pode ser dado como parâmetro, associado em constantes, retornado em funções, etc
//high order function

//criar de forma literal

function fun1() {

}

//Armazenar em uma variável

const fun2 = function() {

}

//armazenar em um array

const array = [function(a,b) {return a+b}, fun1, fun2];

//armazenar em atributo de objeto

const obj = {};
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//passar função como parâmetro

function run(fun) {
    fun()
}

run(function() {console.log('Executando')})

// uma função pode retornar/contar uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)