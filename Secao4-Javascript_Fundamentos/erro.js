function tratarErroELancar(erro) {
    throw new Error('...');
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase()+'!!!');
    } catch (e){
        tratarErroELancar(e);
    } finally {
        console.log('fim');
    }
}

const obj1 = { nome: 'Roberto' };
imprimirNomeGritado(obj1);