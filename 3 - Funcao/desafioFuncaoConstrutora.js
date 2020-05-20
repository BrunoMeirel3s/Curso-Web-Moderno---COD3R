function Pessoa(nome){
    this.falar = function(){
        console.log(`Meu nome é: ${nome}`)
    }

}

const p1 = new Pessoa('Bruno');
p1.falar();