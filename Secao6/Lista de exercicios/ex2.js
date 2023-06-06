const triangulo = (l1,l2,l3) => {
    if(l1 === l2 && l1 === l3){
        return 'Equilátero'
    }else if(l1 === l2 || l1 === l3 || l2 === l3){
        return 'Escaleno'
    }else{
        return 'Isóceles'
    }
}

console.log(triangulo(1,2,1))
console.log(triangulo(1,1,2))
console.log(triangulo(2,1,1))
console.log(triangulo(1,2,3))
console.log(triangulo(1,1,1))