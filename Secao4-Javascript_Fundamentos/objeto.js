const prod1 = {} //coleção de chave e valor
prod1.nome = "Celular"
prod1.marcas = ["apple", "samsung"]
prod1.preco = 1000

console.log(prod1)

const prod2 = {
    nome: "camisa",
    preco: 100,
    obj: {
        bla: {
            obj: "bla"
        }
    }
}

console.log(prod2)

const json = "{ 'nome': 'Celular', 'marca's: [ 'apple', 'samsung' ], 'preco': 1000 }}"