class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('João')
pessoa1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('João')
pessoa2.falar()