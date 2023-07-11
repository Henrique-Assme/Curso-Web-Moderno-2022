function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve aceita um único parâmetro
        }, segundos*1000) //tempo em ms
    })
}

falarDepoisDe(5, 'Olá')
    .then(frase => frase.concat('?!?')) //somente um parâmetro
    .then(outraFrase => console.log(outraFrase)) //concatenar then depois de uma promise
    .catch(e => console.log(e)) //catch pega o erro com o reject(frase)