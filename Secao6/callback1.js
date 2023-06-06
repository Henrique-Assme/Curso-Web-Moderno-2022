const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir) //para cada um chama a função de novo
fabricantes.forEach((fabricante) => console.log(fabricante))//o evento disparado é achar um novo elemento
//acha um evento e chama a funcao de novo