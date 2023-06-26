function aleatorio(numero) {
    const random = Math.round(Math.random()*9 + 1)
    if(random === numero){
        return `Parabéns! O número sorteado foi o ${random}`
    }else{
        return `Que pena! O número sorteado foi o ${random}`
    }
}

console.log(aleatorio(1))
console.log(aleatorio(2))
console.log(aleatorio(3))
console.log(aleatorio(4))
console.log(aleatorio(5))
console.log(aleatorio(6))
console.log(aleatorio(7))
console.log(aleatorio(8))
console.log(aleatorio(9))
console.log(aleatorio(10))
