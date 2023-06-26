const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //client http, faz requisições

const chineses = funcionario => funcionario.pais === 'China'
const mulheres = funcionario => funcionario.genero === 'F'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const menorSalarioMulherChinesa = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    console.log(menorSalarioMulherChinesa)
})
