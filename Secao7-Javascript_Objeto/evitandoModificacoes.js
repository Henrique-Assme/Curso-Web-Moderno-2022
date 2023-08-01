/*
Object.preventExtensions
não deixa nenhum atributos para o objeto
*/

const produto = Object.preventExtensions({
    nome: 'qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Branca'
delete produto.tag
console.log(produto)

/*
Object.seal
apenas modifica atributos existentes, não exclui nem adiciona
*/

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Assme'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

/* 
Object.freeze
torna um objeto constante, nada pode ser adicionado, retirado ou modificado
*/