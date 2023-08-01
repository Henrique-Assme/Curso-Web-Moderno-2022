const obj = {a:1, b:2, c:4, soma(){return a+b+c}}
console.log(JSON.stringify(obj))
//JSON apenas dados
console.log(JSON.parse('{"a": 1, "b": 2, "c": "oi", "d": [], "e": {}}'))
//atributos e strings sempre em aspas duplas