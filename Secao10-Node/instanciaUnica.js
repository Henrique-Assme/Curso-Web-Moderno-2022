// node faz cache, tem instância unica
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}
/*
se o objeto já foi criado, o node não cria um novo, manda o objeto já existente
*/