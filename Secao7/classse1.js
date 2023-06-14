class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(item => this.lancamentos.push(item))
    }

    sumario(){
        let valorTotal = 0
        this.lancamentos.forEach(item => {
            valorTotal += item.valor
        })
        return valorTotal
    }
}

const salario = new Lancamento('Salario', 40000)
const internet = new Lancamento('Internet', -1000)

const contas = new CicloFinanceiro(5, 2023)
contas.addLancamentos(salario, internet)
console.log(contas.sumario())