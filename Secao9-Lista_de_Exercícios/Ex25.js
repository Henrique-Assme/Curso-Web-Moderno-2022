const buscaPorSemelhante = (buscado, array) => {
    return array.filter(palavra => palavra.includes(buscado))   
}

console.log(buscaPorSemelhante('pro', ['programacao', 'mobile', 'profissional']))