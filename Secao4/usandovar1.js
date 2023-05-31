{{{{ var sera = 'será???' }}}}
console.log(sera); //var possui escopo global

function teste() {
    var local = 123
    console.log(local);
}

//console.log(local); //local não definida aqui