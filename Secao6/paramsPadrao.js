function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1,2,3))
console.log(soma1(0,0,0))

function soma2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //1 pq é o indice do b em arguments
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log("\n")
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))

//valor padrao do ES2015
function soma2(a = 1,b = 1,c = 1){
    return a + b + c
}

console.log("\n")
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1,2,3))
console.log(soma2(0,0,0))
