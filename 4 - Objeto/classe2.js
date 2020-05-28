class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

/**
 * Extends é o comando utilizado para criar a herança utilizando
 * o conceito de classe em javascript
 */
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        /**
         * Super é utilizado para quando queremos usar o construtor da classe pai,
         * de onde herdamos os atributos
         */
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)