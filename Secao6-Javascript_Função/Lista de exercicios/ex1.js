function operacoes(a,b) {
    if(b != 0) {
        console.log(a+b, a-b, a*b, a/b)
    }else{
        console.log('Não é possível dividir por 0!')
    }
}

operacoes(1,2)
operacoes(2,0)
