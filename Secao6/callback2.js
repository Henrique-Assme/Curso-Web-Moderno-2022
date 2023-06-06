const notas = [1,2,3,5,6,7,8,9,10]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

notasBaixas = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)