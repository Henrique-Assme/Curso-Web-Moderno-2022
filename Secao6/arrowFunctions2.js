function Pessoa(){
    this.idade = 0;
    setInterval(() => {
        this.idade++; //this em arrow function não varia com quem está chamando
        console.log(this.idade);
    },1000);
}

new Pessoa