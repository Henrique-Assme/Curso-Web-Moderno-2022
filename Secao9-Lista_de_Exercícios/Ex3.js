const calculaSalarioMensal = function(horasTrabalhadas, salarioPorHora) {
    let salario = horasTrabalhadas*salarioPorHora;
    return `Salário igual a R$ ${salario}`;
};

console.log(calculaSalarioMensal(150, 40.5));