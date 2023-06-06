function Pessoa() {
    this.idade = 0;

    const self = this
    setInterval(function () {
        self.idade++;
        console.log(self.idade);
    }/*.bind(this))*/, 1000); //a cada 1000ms, essa função será disparada
}

new Pessoa