function Pessoa() {
    //const Pessoa = this;
    this.idade = 0;

    setInterval(function(){        
        console.log(Pessoa.idade++);
        
    }, 2000);

}

const p1 = new Pessoa();