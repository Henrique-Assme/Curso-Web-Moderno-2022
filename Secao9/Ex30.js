const soma = array => array.reduce((acc, atual) => acc + atual, 0)
const media = array => soma(array)/ array.length

const receberMelhorEstudante = estudantes => {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0, valor = 1
        return { nome: estudante[chave], media: media(estudante[valor])}
    })
    const estudantesOrdenados = estudantesComMedias.sort( (a, b) => b.media - a.media)
    return estudantesOrdenados[0]
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9], 
}))
