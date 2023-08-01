let numero = 1;
{
    let  numero = 2; //let possui escopo local
    console.log('dentro = ', numero);
}
console.log('fora =', numero);