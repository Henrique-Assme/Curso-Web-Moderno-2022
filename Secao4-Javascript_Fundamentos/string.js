const escola = "Cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); //gera vazio, não erro
console.log(escola.charCodeAt(2)); //valor em ascii
console.log(escola.indexOf("3"));
console.log(escola.substring(1));
console.log(escola.substring(0,3));
console.log('Escola '.concat(escola)+"!");
console.log(escola.replace(3, 'e')); //ou usa regex /\d/ tds numeros 
console.log("Henrique, Maria, Ana".split(','))

const nome = "Henrique"
const concatenacao = 'olá' + nome + '!'
const template = `Olá ${nome}!` //template string
console.log(template)
console.log(`1+1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)