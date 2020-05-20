class Pessoa {
    constructor(nome){
        /**
         * o this abaixo permite que este atributo seja
         * encontrado em todos o escopo da função
         */
        this.nome = nome;
    }

    falar(){
        /**
         * Para encontrar o nome construído no constructor
         * faz-se necessário utilizar o this
         */
        console.log(`Meu Nome é: ${this.nome}`);
    }
}

const p1 = new Pessoa('João')
p1.falar();

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p2 = criarPessoa('João');
p2.falar()

