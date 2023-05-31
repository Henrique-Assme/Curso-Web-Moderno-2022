let isAtivo = false;

isAtivo = true;
console.log(!isAtivo);

console.log("verdadeiros em js");
console.log(!!3.5);//numeros menos o 0
console.log(!!-1);
console.log(!!' ');//string 
console.log(!![]);//arrray
console.log(!!{});//objetos
console.log(!!Infinity);
console.log(!!(isAtivo = true));//se o que é atribuido é true

console.log("falsos em js");
console.log(!!0);
console.log(!!'');//srting vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null ||0 || ' '))