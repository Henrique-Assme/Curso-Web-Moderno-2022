let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global) 

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //o this dessa função é o próprio módulo do node que ela foi criada
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//arrow function não muda mesmo com bind
comparaComThisArrow(module.exports)