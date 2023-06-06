function baskara(ax2,bx,c){
    let resultados = []
    let delta = bx**2 - 4*ax2*c
    if(delta < 0){
        return "Delta é negativo."
    }else{
        let x1 = (-bx + Math.sqrt(delta))/2
        let x2 = (-bx - Math.sqrt(delta))/2
        resultados.push(x1)
        resultados.push(x2)
        return resultados
    }
}

console.log(baskara(1,2,3))
console.log(baskara(1,-5,6))
console.log(baskara(1,-2,1))
console.log(baskara(1,0,-1))