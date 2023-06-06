const pessoa ={
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar
falar() //da undefined, pois this nesse contexto não é mais o próprio objeto, conflito entre OO e funcional

const falarDePessoa = pessoa.falar.bind(pessoa) //bind direciona quem sera o this
falarDePessoa() 