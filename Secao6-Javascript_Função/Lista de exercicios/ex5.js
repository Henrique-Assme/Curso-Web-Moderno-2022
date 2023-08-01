function emReais(numero){
    console.log(`R$${numero.toFixed(2).toString().replace('.', ',')}`)
}

emReais(0.1+0.2)