const removeVogais = string => {
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach(vogal => string = string.replace(vogal, ''))
    return string
}

console.log(removeVogais('Cod3r'))
console.log(removeVogais('Fundamentos'))