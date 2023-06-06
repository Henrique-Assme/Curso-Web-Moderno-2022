function area(l, h) {
    const area = l*h;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(1,2,3,4))
console.log(area(20,20))