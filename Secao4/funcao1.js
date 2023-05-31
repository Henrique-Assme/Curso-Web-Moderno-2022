// função sem retorno
function imprimirSoma(a, b) {
    console.log(a+b);
}

imprimirSoma(2,3);
imprimirSoma(2); //parâmetros não passados viram undefined
imprimirSoma(3,4,5,6,7,8); //só pega os dois primeiros
imprimirSoma(); //também funciona, mas da NaN também

//função com retorn
function soma(a, b = 1) { //valor padrão
    return a+b
}

console.log(soma(2,3));
console.log(soma(2));